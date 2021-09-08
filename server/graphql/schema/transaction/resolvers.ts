import { ApolloError, AuthenticationError } from "apollo-server-express";
import cuid from "cuid";
import { TMidtransPayType, TMidtransProps } from "../../../types/api";
import {
  TTransactionQuery,
  TTransactionMutation,
} from "../../../types/graphql";
import { TGQLPaymentType, TPaymentBT } from "../../../types/transaction";
import {
  buyNowItems,
  buyNowWeight,
  courierCost,
  sCartItems,
  sCartWeight,
} from "./utils";
import util from "util";

export const Query: TTransactionQuery = {
  paymentType: async (_, { isEnabled }, { db }) => {
    const paymentTypes = await db.paymentType.findMany({
      include: { PaymentService: true },
    });
    if (isEnabled) {
      const filterActive = paymentTypes.reduce((acc, curr) => {
        if (curr.isEnabled) {
          return [
            ...acc,
            {
              ...curr,
              PaymentService: curr.PaymentService.filter(
                (val) => val.isEnabled
              ),
            },
          ];
        } else {
          return acc;
        }
      }, [] as TGQLPaymentType[]);
      return filterActive;
    } else {
      return paymentTypes;
    }
  },
  howToPay: async (_, { paymentId }, { db }) => {
    const htp = await db.paymentService.findUnique({
      where: { id: paymentId },
    });
    const objHtp = JSON.parse(htp.howToPay);
    return htp.howToPay;
  },
};

export const Mutation: TTransactionMutation = {
  order: async (_, { data }, { api, db, user }) => {
    const exprDuration = 86400000; /* 24hours */
    const recipient = await db.recipient.findUnique({
      where: { id: data.recipientId },
      include: { User: true },
    });
    if (user.id !== recipient.User.id)
      throw new AuthenticationError("Different user account");
    const orderId = cuid();

    switch (data.orderType) {
      case "shoppingcart": {
        const sCart = await db.shoppingCart.findMany({
          where: { userId: recipient.userId },
          select: {
            amount: true,
            Book: {
              select: { id: true, title: true, price: true, weight: true },
            },
          },
        });

        const weight = sCartWeight({ shoppingCart: sCart });
        const cost = await courierCost({
          api,
          courier: data.courierCode,
          service: data.courierService,
          destination: recipient.cityId,
          weight,
        });
        const { item_details, gross_amount } = sCartItems({
          shoppingCart: sCart,
          courier: {
            code: data.courierCode,
            service: data.courierService,
            cost,
          },
        });

        const charge = await api.midtrans({
          type: data.payment as TMidtransPayType,
          value: {
            transaction_details: { gross_amount, order_id: orderId },
            item_details,
            customer_details: {
              first_name: recipient.User.firstName,
              last_name: recipient.User.lastName,
              email: recipient.User.email,
              phone: recipient.User.phone,
              shipping_address: {
                first_name: recipient.firstName,
                last_name: recipient.lastName,
                email: recipient.email,
                phone: recipient.phone,
                city: recipient.cityName,
                postal_code: recipient.postalCode,
                address: recipient.address,
                country_code: "IDN",
              },
            },
          },
        });
        if (charge.fraud_status === "deny" || charge.status_code !== "201")
          throw new ApolloError(`Transaction rejected`);

        const transactionTime = new Date(`${charge.transaction_time} GMT+7`);
        const expirationTime = new Date(
          transactionTime.getTime() + exprDuration
        );
        const order = await db.order.create({
          data: {
            id: charge.order_id,
            grossAmount: gross_amount,
            currency: charge.currency,
            fraudStatus: charge.fraud_status,
            transactionStatus: charge.transaction_status,
            transactionTime,
            expirationTime,
            ItemDetails: { create: item_details },
            User: { connect: { id: user.id } },
            CustomerDetails: {
              create: {
                firstName: recipient.User.firstName,
                lastName: recipient.User.lastName,
                email: recipient.User.email,
                phone: recipient.User.phone,
                ShippingAddress: {
                  create: {
                    firstName: recipient.firstName,
                    lastName: recipient.lastName,
                    email: recipient.email,
                    phone: recipient.phone,
                    city: recipient.cityName,
                    postalCode: recipient.postalCode,
                    address: recipient.address,
                    countryCode: "IDN",
                  },
                },
              },
            },
            PaymentInfo: { create: charge.paymentInfo },
          },
          select: {
            id: true,
            currency: true,
            grossAmount: true,
            transactionTime: true,
            expirationTime: true,
            PaymentInfo: true,
          },
        });
        return {
          id: order.id,
          currency: order.currency,
          grossAmount: order.grossAmount,
          expirationTime: order.expirationTime,
          transactionTime: order.transactionTime,
          paymentId: charge.paymentId,
          paymentType: charge.payment_type,
          PaymentInfo: order.PaymentInfo,
        };
      }
      case "buy-now": {
        const book = await db.book.findUnique({
          where: { id: data.bookId },
          select: { id: true, title: true, weight: true, price: true },
        });
        const weight = await buyNowWeight({
          book,
          amount: data.amount,
        });
        const cost = await courierCost({
          api,
          courier: data.courierCode,
          service: data.courierService,
          destination: recipient.cityId,
          weight,
        });

        const { item_details, gross_amount } = buyNowItems({
          book,
          amount: data.amount,
          courier: {
            code: data.courierCode,
            service: data.courierService,
            cost,
          },
        });

        const charge = await api.midtrans({
          type: data.payment as TMidtransPayType,
          value: {
            transaction_details: { gross_amount, order_id: orderId },
            item_details,
            customer_details: {
              first_name: recipient.User.firstName,
              last_name: recipient.User.lastName,
              email: recipient.User.email,
              phone: recipient.User.phone,
              shipping_address: {
                first_name: recipient.firstName,
                last_name: recipient.lastName,
                email: recipient.email,
                phone: recipient.phone,
                city: recipient.cityName,
                postal_code: recipient.postalCode,
                address: recipient.address,
                country_code: "IDN",
              },
            },
          },
        });
        if (charge.fraud_status === "deny" || charge.status_code !== "201")
          throw new ApolloError(`Transaction rejected`);

        const transactionTime = new Date(`${charge.transaction_time} GMT+7`);
        const expirationTime = new Date(
          transactionTime.getTime() + exprDuration
        );
        const order = await db.order.create({
          data: {
            id: charge.order_id,
            grossAmount: gross_amount,
            currency: charge.currency,
            fraudStatus: charge.fraud_status,
            transactionStatus: charge.transaction_status,
            transactionTime,
            expirationTime,
            ItemDetails: { create: item_details },
            User: { connect: { id: user.id } },
            CustomerDetails: {
              create: {
                firstName: recipient.User.firstName,
                lastName: recipient.User.lastName,
                email: recipient.User.email,
                phone: recipient.User.phone,
                ShippingAddress: {
                  create: {
                    firstName: recipient.firstName,
                    lastName: recipient.lastName,
                    email: recipient.email,
                    phone: recipient.phone,
                    city: recipient.cityName,
                    postalCode: recipient.postalCode,
                    address: recipient.address,
                    countryCode: "IDN",
                  },
                },
              },
            },
            PaymentInfo: { create: charge.paymentInfo },
          },
          select: {
            id: true,
            currency: true,
            grossAmount: true,
            transactionTime: true,
            expirationTime: true,
            PaymentInfo: true,
          },
        });
        return {
          id: order.id,
          currency: order.currency,
          grossAmount: order.grossAmount,
          expirationTime: order.expirationTime,
          transactionTime: order.transactionTime,
          paymentId: charge.paymentId,
          paymentType: charge.payment_type,
          PaymentInfo: order.PaymentInfo,
        };
      }
      default:
        throw new ApolloError(`Order type not found`);
    }
  },
};
