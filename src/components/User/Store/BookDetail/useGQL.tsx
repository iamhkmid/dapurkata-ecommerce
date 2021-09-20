import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import { GET_BOOK_DETAIL } from "../../../../graphql/book/queries";
import { CREATE_SHOPPING_CART } from "../../../../graphql/shoppingCart/mutations";
import { SHOPPINGCART } from "../../../../graphql/shoppingCart/queries";
import { TGQLBookDetail } from "../../../../types/book";
import { TGQLCreateShoppingCart } from "../../../../types/shoppingCart";

export const useGQLGetbook = ({ bookId }) => {
  const { data, loading, error } = useQuery<TGQLBookDetail>(GET_BOOK_DETAIL, {
    skip: !bookId,
    variables: { bookId },
    fetchPolicy: "cache-first",
    errorPolicy: "all",
  });

  return { dataGB: data?.book, loadGB: loading, errorGB: error };
};

export const useGQLCreateSC = () => {
  const { push, pathname } = useRouter();
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(UserNavCtx);
  const [createShoppingCart, { data, loading, error }] =
    useMutation<TGQLCreateShoppingCart>(CREATE_SHOPPING_CART, {
      errorPolicy: "all",
    });

  type TCreateSC = {
    bookId: string;
    amount: number;
    weight: number;
  };
  const createSC = async ({ bookId, amount }: TCreateSC) => {
    if (!user) {
      push(`/auth/signin?next=${pathname}`);
      dispatch({ type: "CLOSE_POPUP" });
    } else {
      await createShoppingCart({
        variables: { bookId, amount },
        refetchQueries: [
          { query: SHOPPINGCART, variables: { userId: user.id } },
        ],
        awaitRefetchQueries: true,
      });
    }
  };

  useEffect(() => {
    if (error)
      dispatch({
        type: "SHOW_POPUP",
        value: {
          name: "MESSAGE",
          message: error.message,
        },
      });
  }, [error]);
  return {
    createShoppingCart: createSC,
    data: data?.createShoppingCart,
    error,
    loading,
  };
};
