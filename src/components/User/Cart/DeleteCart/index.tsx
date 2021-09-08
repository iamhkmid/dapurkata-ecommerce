import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { DELETE_SHOPPING_CART } from "../../../../graphql/shoppingCart/mutations";
import { SHOPPINGCART } from "../../../../graphql/shoppingCart/queries";
import { AuthContext } from "../../../../contexts/AuthCtx";
import IconsControl from "../../../IconsControl";
import * as El from "./DeleteCartElement";
import { TGQLDeleteShoppingCart } from "../../../../types/shoppingCart";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";

const DeleteCart = ({ cartId }) => {
  const { user } = useContext(AuthContext);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const [deleteShoppingCart, {}] = useMutation<TGQLDeleteShoppingCart>(
    DELETE_SHOPPING_CART,
    {
      errorPolicy: "none",
      fetchPolicy: "no-cache",
    }
  );

  const handler = () => {
    deleteShoppingCart({
      variables: { cartId },
      refetchQueries: [{ query: SHOPPINGCART, variables: { userId: user.id } }],
      awaitRefetchQueries: true,
    });
  };

  return (
    <El.Main onClick={() => handler()} disabled={shoppingCart.loading}>
      {IconsControl("delete")}
    </El.Main>
  );
};

export default DeleteCart;
