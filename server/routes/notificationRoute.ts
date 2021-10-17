import express from "express";
import CryptoJS from "crypto-js";
import { encode } from "js-base64";
import { db } from "../graphql/services/db";
import { TNotifPaymentBody } from "../types/api";
import pubsub from "../graphql/services/pubsub";

const Router = express.Router();

Router.use("/payment-gateway", async (req, res, next) => {
  const body: TNotifPaymentBody = req.body;
  const signatureKey: string = body.signature_key;
  const orderId: string = body.order_id;
  const statusCode: string = body.status_code;
  const grossAmount: string = body.gross_amount;
  const serverKey: string = process.env.MIDTRANS_SERVER_KEY;
  const transactionTime: string = body.transaction_time;
  const transactionStatus: string = body.transaction_status;
  const fraudStatus: string = body.fraud_status;

  const validBody =
    !!orderId &&
    !!statusCode &&
    !!grossAmount &&
    !!signatureKey &&
    !!transactionTime &&
    !!transactionStatus &&
    !!fraudStatus;

  if (validBody) {
    const calcSignatureKey = CryptoJS.SHA512(
      orderId + statusCode + grossAmount + serverKey
    );
    if (signatureKey === calcSignatureKey.toString()) {
      if (transactionStatus == "capture") {
        if (fraudStatus == "challenge") {
          // TODO set transaction status on your database to 'challenge'
          // and response with 200 OK
        } else if (fraudStatus == "accept") {
          // TODO set transaction status on your database to 'success'
          // and response with 200 OK
        }
      } else if (transactionStatus == "settlement") {
        // TODO set transaction status on your database to 'success'
        // and response with 200 OK
        try {
          const order = await db.order.update({
            where: { id: orderId },
            data: {
              transactionTime: new Date(`${transactionTime} GMT+7`),
              transactionStatus: transactionStatus,
              fraudStatus: fraudStatus,
            },
          });
          if (!!order) {
            pubsub.publish("UPDATE_ORDER_STATUS", {
              orderInfo: {
                transactionTime: order.transactionTime,
                transactionStatus: order.transactionStatus,
                fraudStatus: order.fraudStatus,
              },
            });
          }
        } catch (err) {
        } finally {
          res.status(200).end();
        }
      } else if (
        transactionStatus == "cancel" ||
        transactionStatus == "deny" ||
        transactionStatus == "expire"
      ) {
        // TODO set transaction status on your database to 'failure'
        // and response with 200 OK
        try {
          const order = await db.order.update({
            where: { id: orderId },
            data: {
              transactionTime: new Date(`${transactionTime} GMT+7`),
              transactionStatus: transactionStatus,
              fraudStatus: fraudStatus,
            },
          });
          if (!!order) {
            pubsub.publish("UPDATE_ORDER_STATUS", {
              orderInfo: {
                transactionTime: order.transactionTime,
                transactionStatus: order.transactionStatus,
                fraudStatus: order.fraudStatus,
              },
            });
          }
        } catch (err) {
        } finally {
          res.status(200).end();
        }
      } else if (transactionStatus == "pending") {
        // TODO set transaction status on your database to 'pending' / waiting payment
        // and response with 200 OK
        try {
          const order = await db.order.update({
            where: { id: orderId },
            data: {
              transactionTime: new Date(`${transactionTime} GMT+7`),
              transactionStatus: transactionStatus,
              fraudStatus: fraudStatus,
            },
          });
          if (!!order) {
            pubsub.publish("UPDATE_ORDER_STATUS", {
              orderInfo: {
                transactionTime: order.transactionTime,
                transactionStatus: order.transactionStatus,
                fraudStatus: order.fraudStatus,
              },
            });
          }
        } catch (err) {
        } finally {
          res.status(200).end();
        }
      }
    } else {
      res.status(403).end();
    }
  } else {
    res.status(403).end();
  }
});

export default Router;
