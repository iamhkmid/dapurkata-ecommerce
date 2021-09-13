import { useMutation } from "@apollo/client";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { SIGNIN } from "../../../../graphql/auth/mutations";
import { EDIT_SHOPPING_CART } from "../../../../graphql/shoppingCart/mutations";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { useGQLUpdateSCart } from "./useGQL";
import { client } from "../../../../contexts/ApolloClientCtx";
import IconsControl from "../../../IconsControl";
import * as El from "./UpdateCartInputElement";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import ShowMessage from "../../../otherComps/ShowMessage";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";

type TUpdateCart = {
  cartProps: {
    cartId: string;
    amount: number;
  };
};

const UpdateCartInput: FC<TUpdateCart> = ({ cartProps }) => {
  const { cartId, amount } = cartProps;
  const [accAmount, setAccAmount] = useState(amount);
  const { shoppingCart, dispatch: dispatchSCart } = useContext(ShoppingCartCtx);
  const inputRef = useRef<HTMLInputElement>(null);
  const { updateSCart, data, error, loading } = useGQLUpdateSCart();
  const { userNav, dispatch } = useContext(UserNavCtx);

  let timeout = undefined;
  const fetchSC = async (val: number) => {
    if (val === accAmount) {
      inputRef.current.value = String(accAmount);
    } else {
      await updateSCart({ cartId, amount: val });
    }
  };
  const withWait = (val: number, wait: boolean) => {
    if (wait) {
      timeout = setTimeout(fetchSC, 2000, val);
    } else {
      fetchSC(val);
    }
  };
  const changeAmount = (val: string, wait: boolean) => {
    clearTimeout(timeout);
    const numVal = Math.floor(Number(val));
    const sliceVal = val.slice(0, 1);

    if (sliceVal === "0") {
      withWait(1, wait);
    } else if (numVal > 100) {
      withWait(100, wait);
    } else if (numVal < 1) {
      withWait(1, wait);
    } else {
      withWait(numVal, wait);
    }
  };
  useEffect(() => {
    dispatchSCart({ type: "SET_LOADING_SCART", value: loading });
  }, [loading]);

  useEffect(() => {
    if (data) {
      const curr = shoppingCart.data?.find((el) => el.id === cartId) || {
        amount: 1,
      };
      setAccAmount(curr.amount);
      inputRef.current.value = String(curr.amount);
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      const curr = (shoppingCart &&
        shoppingCart.data.find((el) => el.id === cartId)) || {
        amount: 1,
      };
      setAccAmount(curr.amount);
      inputRef.current.value = String(curr.amount);
      dispatch({
        type: "SHOW_POPUP",
        value: {
          name: "MESSAGE",
          value: error.message,
          onClose: userNav.showPopUp.name,
          onCloseValue: userNav.showPopUp.value,
        },
      });
    }
  }, [error]);

  return (
    <El.Main>
      <El.InputWrapper>
        <El.AmountBtn
          onClick={() =>
            changeAmount(String(Number(inputRef.current.value) - 1), false)
          }
          disabled={accAmount === 1 || shoppingCart.loading}
        >
          {IconsControl("Minus")}
        </El.AmountBtn>
        <El.Input
          type="number"
          defaultValue={accAmount}
          ref={inputRef}
          onChange={(e) => changeAmount(e.target.value, true)}
          disabled={shoppingCart.loading}
        />
        <El.AmountBtn
          onClick={() =>
            changeAmount(String(Number(inputRef.current.value) + 1), false)
          }
          disabled={accAmount === 100 || shoppingCart.loading}
        >
          {IconsControl("Plus")}
        </El.AmountBtn>
      </El.InputWrapper>
    </El.Main>
  );
};

export default UpdateCartInput;
