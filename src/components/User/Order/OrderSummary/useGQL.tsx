import { useMutation, useQuery } from "@apollo/client";
import { GET_ORDER_BOOK } from "../../../../graphql/book/queries";
import { ORDER } from "../../../../graphql/transaction/mutations";
import { TGQLGetOrderBook } from "../../../../types/book";
import { TGQLOrder } from "../../../../types/order";

type TValues = {
  orderType: string;
  recipientId?: string;
  bookId?: string;
  amount?: number;
  courierCode: string;
  courierService: string;
  payment: string;
};
export const useGQLOrder = () => {
  const [order, { data, error, loading }] = useMutation<TGQLOrder>(ORDER, {
    errorPolicy: "all",
    fetchPolicy: "no-cache",
  });
  const makeAnOrder = async (values: TValues) => {
    return order({ variables: { data: values } });
  };
  return { makeAnOrder, data: data?.order, error, loading };
};
