import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthCtx";
import { ORDERS_FILTER_BY_USER } from "../../../../../graphql/transaction/queries";
import { TOrdersFByUser } from "../../../../../types/transaction";

export const useGQLOrders = () => {
  const { user } = useContext(AuthContext);
  const { data, error, loading } = useQuery<TOrdersFByUser>(
    ORDERS_FILTER_BY_USER,
    {
      variables: { userId: user.id, filterBy: "USER" },
      fetchPolicy: "cache-first",
      errorPolicy: "all",
    }
  );
  return { data: data?.orders, error, loading };
};
