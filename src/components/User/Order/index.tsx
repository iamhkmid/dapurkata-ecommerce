import { FC, useRef } from "react";
import * as El from "./OrderElement";
import { useGQLGetBook, useGQLGetRecipients } from "./useGQL";
import OrderSummary from "./OrderSummary";
import Delevery from "./Delevery";
import { useRouter } from "next/dist/client/router";
import { useContext } from "react";
import { OrderCtx } from "../../../contexts/OrderCtx";
import { useEffect } from "react";
import { ShoppingCartCtx } from "../../../contexts/ShoppingCartCtx";

const Order: FC = () => {
  const { query } = useRouter();
  const { order, dispatch } = useContext(OrderCtx);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const { data, error, loading } = useGQLGetBook({
    bookId:
      (query.type as string) === "buy-now" && (query["book-id"] as string),
  });
  useGQLGetRecipients();
  useEffect(() => {
    if (data && (query.type as string) === "buy-now") {
      dispatch({
        type: "SET_ORDER_TYPE",
        value: {
          type: "buy-now",
          book: data,
          amount: Number((query.amount as string) || 1),
          weight: data.weight,
        },
      });
    } else {
      const amount = shoppingCart.data.reduce(
        (acc, curr) => acc + curr.Book.price * curr.amount,
        0
      );
      dispatch({ type: "SET_ORDER_TYPE", value: { type: "shoppingcart" } });
    }
  }, [query.type, data]);

  useEffect(() => {
    dispatch({
      type: "SET_ORDER_LOADING",
      value: loading,
    });
  }, [loading]);

  return (
    <El.Main>
      <El.Delivery>
        <El.SectionHead>
          <El.SectionName>{"Pengiriman & Pembayaran"}</El.SectionName>
        </El.SectionHead>
        <Delevery />
      </El.Delivery>
      <El.OrderSummary>
        <El.SectionHead>
          <El.SectionName>Ringkasan Pemesanan</El.SectionName>
        </El.SectionHead>
        <OrderSummary />
      </El.OrderSummary>
    </El.Main>
  );
};

export default Order;
