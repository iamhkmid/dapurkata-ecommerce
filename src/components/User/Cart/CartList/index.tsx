import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import BookCover from "../../../otherComps/BookCard/BookCover";
import Button from "../../../otherComps/Buttons/Button";
import DeleteCart from "../DeleteCart";
import UpdateCartInput from "../UpdateCartInput";
import * as El from "./CartListElement";

const CartList = () => {
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const [amountPrice, setAmountPrice] = useState(0);
  const { dispatch } = useContext(UserNavCtx);
  const { push } = useRouter();
  useEffect(() => {
    const amount = shoppingCart.data.reduce(
      (acc, curr) => acc + curr.Book.price * curr.amount,
      0
    );
    setAmountPrice(amount);
  }, [shoppingCart]);
  return (
    <El.Main>
      <El.Ul>
        {shoppingCart.data.length === 0 && (
          <El.Li>
            <El.EmptyCart>Keranjang Kosong</El.EmptyCart>
          </El.Li>
        )}
        {shoppingCart.data.map((val) => {
          const cover = val.Book.BookPicture.filter(
            (img) => img.type === "COVER"
          );
          return (
            <El.Li key={val.id}>
              <El.CoverWrapper>
                <BookCover url={cover.length > 0 && cover[0].url} quality={5} />
              </El.CoverWrapper>
              <El.InfoWrapper>
                <El.Info>
                  <h1>{val.Book.title}</h1>
                  <h1>{val.Book.Author.name}</h1>
                  <h1>
                    {`Rp `}
                    <NumberFormat
                      value={val.Book.price}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                    />
                  </h1>
                </El.Info>
                <El.BtnWrapper>
                  <UpdateCartInput
                    cartProps={{
                      cartId: val.id,
                      amount: val.amount,
                    }}
                  />
                  <DeleteCart cartId={val.id} />
                </El.BtnWrapper>
              </El.InfoWrapper>
            </El.Li>
          );
        })}
      </El.Ul>
      <El.Footer>
        <El.AmountPrice>
          <h1>Total Harga</h1>
          <h1>
            {`Rp `}
            <NumberFormat
              value={amountPrice}
              displayType={"text"}
              thousandSeparator={"."}
              decimalSeparator={","}
            />
          </h1>
        </El.AmountPrice>
        <Button
          name="LANJUTKAN PEMBAYARAN"
          type="button"
          onClick={() => {
            push({ pathname: "/u/order", query: { type: "shoppingcart" } });
            dispatch({ type: "CLOSE_MENU" });
          }}
        />
      </El.Footer>
    </El.Main>
  );
};

export default CartList;
