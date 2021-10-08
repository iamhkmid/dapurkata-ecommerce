import { ApolloError, AuthenticationError } from "apollo-server-express";
import cuid from "cuid";
import { TMidtransPayType, TMidtransProps } from "../../../types/api";
import {
  TTransactionQuery,
  TTransactionMutation,
  TOrder,
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
import { validateUser } from "../../utils/validateUser";

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
    if (Array.isArray(objHtp)) {
      return objHtp;
    } else {
      return null;
    }
  },
  order: async (_, { orderId }, { db, user }) => {
    const findOrder = await db.order.findUnique({
      where: { id: orderId },
    });
    validateUser({
      target: "SPECIFIC_USER_OR_ADMIN",
      targetId: findOrder?.userId,
      currRole: user.role,
      currId: user.id,
    });
    return findOrder;
  },
  orders: async (_, { userId, filterBy }, { db, user }) => {
    if (filterBy === "USER") {
      const findUser = await db.user.findUnique({
        where: { id: user.id },
        select: { id: true, Order: true },
      });
      validateUser({
        target: "SPECIFIC_USER",
        targetId: findUser?.id,
        currRole: user.role,
        currId: user.id,
      });
      return findUser.Order;
    } else if (filterBy === "ALL") {
      validateUser({
        target: "ADMIN_ONLY",
        currRole: user.role,
      });
      return await db.order.findMany();
    } else {
      throw new ApolloError("Invalid orderFilter");
    }
  },
};

export const Mutation: TTransactionMutation = {
  order: async (_, { data }, { api, db, user }) => {
    const exprDuration = 86400000; /* 24hours */
    const recipient = await db.recipient.findUnique({
      where: { id: data.recipientId },
      include: { User: true, City: { include: { Province: true } } },
    });
    validateUser({
      target: "SPECIFIC_USER",
      targetId: recipient.User.id,
      currRole: user.role,
      currId: user.id,
    });

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
                city: recipient.City.name,
                postal_code: recipient.City.postalCode,
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
                    city: recipient.City.name,
                    postalCode: recipient.City.postalCode,
                    address: recipient.address,
                    countryCode: "IDN",
                  },
                },
              },
            },
            PaymentInfo: { create: charge.paymentInfo },
            PaymentService: { connect: { id: charge.paymentServiceId } },
          },
        });
        return order;
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
                city: recipient.City.name,
                postal_code: recipient.City.postalCode,
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
                    city: recipient.City.name,
                    postalCode: recipient.City.postalCode,
                    address: recipient.address,
                    countryCode: "IDN",
                  },
                },
              },
            },
            PaymentInfo: { create: charge.paymentInfo },
            PaymentService: { connect: { id: charge.paymentServiceId } },
          },
        });
        return order;
      }
      default:
        throw new ApolloError(`Order type not found`);
    }
  },
};

export const Order: TOrder = {
  PaymentService: async ({ id }, _, { db }) => {
    const findOrder = await db.order.findUnique({
      where: { id },
      select: { PaymentService: { include: { PaymentType: true } } },
    });
    return findOrder.PaymentService;
  },
  User: async ({ id }, _, { db }) => {
    const findOrder = await db.order.findUnique({
      where: { id },
      select: { User: true },
    });
    return findOrder.User;
  },
  ItemDetails: async ({ id }, _, { db }) => {
    const findOrder = await db.order.findUnique({
      where: { id },
      select: { ItemDetails: true },
    });
    return findOrder.ItemDetails;
  },
  CustomerDetails: async ({ id }, _, { db }) => {
    const findOrder = await db.order.findUnique({
      where: { id },
      select: { CustomerDetails: { include: { ShippingAddress: true } } },
    });
    return findOrder.CustomerDetails;
  },
  PaymentInfo: async ({ id }, _, { db }) => {
    const findOrder = await db.order.findUnique({
      where: { id },
      select: { PaymentInfo: true },
    });
    return findOrder.PaymentInfo;
  },
};
