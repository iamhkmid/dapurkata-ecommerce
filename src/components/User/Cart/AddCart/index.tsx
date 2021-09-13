import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import { TCart } from "../../../../types/shoppingCart";
import IconsControl from "../../../IconsControl";
import BookCover from "../../../otherComps/BookCard/BookCover";
import PopUpHeader from "../../../otherComps/PopUpHeader";
import AddCartInput from "../AddCartInput";
import DeleteCart from "../DeleteCart";
import UpdateCartInput from "../UpdateCartInput";
import * as El from "./AddCartElement";
import { useGQLCreateSC, useGQLGetbook } from "./useGQL";

type TCover = {
  id: string;
  type: string;
  url: string;
};

const AddCart = () => {
  const { userNav, dispatch } = useContext(UserNavCtx);
  const { user } = useContext(AuthContext);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const { push, pathname } = useRouter();
  const [coverURL, setCoverURL] = useState<string>(null);
  const [amount, setAmount] = useState<number>(1);
  const [currCart, setCurrCart] = useState<TCart>(null);

  const { dataGB, loadGB, errorGB } = useGQLGetbook({
    bookId: userNav.showPopUp.value,
  });
  const { createShoppingCart, data, error, loading } = useGQLCreateSC();

  const isDisabled =
    loading || loadGB || (user && user.role !== "USER") || !!currCart;
  type TbuyNowHandler = { amount: number; bookId: string };
  const buyNowHandler = (props: TbuyNowHandler) => {
    const { amount, bookId } = props;
    if (!user) {
      push(`/auth/signin?next=${pathname}`);
    } else {
      dispatch({ type: "CLOSE_POPUP" });
      push({
        pathname: "/u/order",
        query: { type: "buy-now", "book-id": bookId, amount },
      });
    }
  };

  useEffect(() => {
    if (dataGB) {
      const cover = dataGB.BookPicture.filter((img) => img.type === "COVER");
      setCoverURL(cover.length > 0 && cover[0].url);
    }
  }, [dataGB]);

  useEffect(() => {
    const findCart =
      shoppingCart.data.find(
        (val) => val.Book.id === userNav.showPopUp.value
      ) || null;
    setCurrCart(findCart);
  }, [shoppingCart]);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {dataGB && (
        <El.Section>
          <PopUpHeader close={() => dispatch({ type: "CLOSE_POPUP" })} />
          <El.BookWrapper>
            <El.CoverWrapper>
              <BookCover url={coverURL} quality={10} height={160} width={110} />
            </El.CoverWrapper>
            <El.InfoWrapper>
              <El.Info>
                <h1>{dataGB.title.toUpperCase()}</h1>
                <h1>{dataGB.Author.name}</h1>
                <h1>
                  {`Rp `}
                  <NumberFormat
                    value={dataGB.price}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                  />
                </h1>
              </El.Info>
              {!currCart && (
                <AddCartInput amount={amount} setAmount={setAmount} />
              )}
              {currCart && (
                <El.BtnWrapper>
                  <UpdateCartInput
                    cartProps={{
                      cartId: currCart.id,
                      amount: currCart.amount,
                    }}
                  />
                  <DeleteCart cartId={currCart.id} />
                </El.BtnWrapper>
              )}
            </El.InfoWrapper>
          </El.BookWrapper>
          <El.ButtonWrapper>
            <button type="button">Detail</button>
            <button
              type="button"
              onClick={() =>
                createShoppingCart({
                  bookId: dataGB.id,
                  weight: dataGB.weight,
                  amount,
                })
              }
              disabled={isDisabled}
            >
              {IconsControl("CartAdd")}
            </button>
            <button
              type="button"
              onClick={() => buyNowHandler({ amount, bookId: dataGB.id })}
              disabled={isDisabled}
            >
              Beli Sekarang
            </button>
          </El.ButtonWrapper>
        </El.Section>
      )}
    </El.Main>
  );
};

export default AddCart;
