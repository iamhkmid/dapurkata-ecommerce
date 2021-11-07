import { useMutation, useQuery } from "@apollo/client";
import { ORDER_LIST_ADMIN } from "../../../../graphql/transaction/queries";
import { TOrderListsUsers } from "../../../../types/transaction";

export const useGQLOrderListsUsers = () => {
  const { data, error, loading } = useQuery<TOrderListsUsers>(
    ORDER_LIST_ADMIN,
    {
      errorPolicy: "all",
    }
  );
  const newData = data?.ordersListUsers || [];
  return { data: newData, error, loading };
};
