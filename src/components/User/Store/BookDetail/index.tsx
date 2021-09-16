import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { useWindowSize } from "react-use";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import { TCart } from "../../../../types/shoppingCart";
import IconsControl from "../../../IconsControl";
import CoverFixed from "../Cover/CoverFixed";
import Button from "../../../otherComps/Buttons/Button";
import PopUpHeader from "../../../otherComps/PopUpHeader";
import AddCartInput from "../../Cart/AddCartInput";
import DeleteCart from "../../Cart/DeleteCart";
import UpdateCartInput from "../../Cart/UpdateCartInput";
import * as El from "./BookDetailElement";
import { useGQLCreateSC, useGQLGetbook } from "./useGQL";

type TCover = {
  id: string;
  type: string;
  url: string;
};

const BookDetail = () => {
  const { userNav, dispatch } = useContext(UserNavCtx);
  const { user } = useContext(AuthContext);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const { push, pathname } = useRouter();
  const [coverURL, setCoverURL] = useState<string>(null);
  const [amount, setAmount] = useState<number>(1);
  const [currCart, setCurrCart] = useState<TCart>(null);

  const initialImgSize = { h: 220, w: 150 };
  const [imgSize, setImgSize] = useState(initialImgSize);
  const { width } = useWindowSize();
  useEffect(() => {
    width > 540 && setImgSize(initialImgSize);
    width <= 540 && setImgSize({ h: 200, w: 135 });
  }, [width]);

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
      <El.Section>
        <PopUpHeader close={() => dispatch({ type: "CLOSE_POPUP" })} />
        {dataGB && (
          <El.ContentWrapper>
            <El.Content>
              <El.Images>
                <El.CoverWrapper>
                  <div>
                    <CoverFixed
                      url={coverURL}
                      quality={75}
                      height={imgSize.h}
                      width={imgSize.w}
                    />
                  </div>
                </El.CoverWrapper>
              </El.Images>
              <El.InfoWrapper>
                <El.MainInfo>
                  <h1 className="title">{dataGB.title}</h1>
                  <h1 className="author">{dataGB.Author.name}</h1>
                </El.MainInfo>
                <El.OrderInfo>
                  <h1 className="price">
                    <NumberFormat
                      prefix="Rp"
                      suffix=",00"
                      value={dataGB.price}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                    />
                  </h1>
                  {!currCart && (
                    <AddCartInput amount={amount} setAmount={setAmount} />
                  )}
                  {currCart && (
                    <El.CartBtn>
                      <UpdateCartInput
                        cartProps={{
                          cartId: currCart.id,
                          amount: currCart.amount,
                        }}
                      />
                      <DeleteCart cartId={currCart.id} />
                    </El.CartBtn>
                  )}
                  <El.ActionBtn>
                    <Button
                      type="button"
                      name="Masukan Keranjang"
                      color="success"
                      disabled={isDisabled}
                      onClick={() =>
                        createShoppingCart({
                          bookId: dataGB.id,
                          weight: dataGB.weight,
                          amount,
                        })
                      }
                    />
                    <Button
                      type="button"
                      name="Beli"
                      color="primary"
                      onClick={() =>
                        buyNowHandler({ amount, bookId: dataGB.id })
                      }
                      disabled={isDisabled}
                    />
                  </El.ActionBtn>
                </El.OrderInfo>
              </El.InfoWrapper>
            </El.Content>
            <El.Content2>
              <El.AdditionalInfo>
                <div>
                  <h1 className="ai-name">Berat</h1>
                  <h1 className="ai-value">{`${dataGB.weight} gram`}</h1>
                </div>
                <div>
                  <h1 className="ai-name">Tinggi</h1>
                  <h1 className="ai-value">{`${dataGB.height} cm`}</h1>
                </div>
                <div>
                  <h1 className="ai-name">Halaman</h1>
                  <h1 className="ai-value">{dataGB.numberOfPages}</h1>
                </div>
                <div>
                  <h1 className="ai-name">Tahun Terbit</h1>
                  <h1 className="ai-value">{dataGB.releaseYear}</h1>
                </div>
                <div>
                  <h1 className="ai-name">Rating</h1>
                  <div className="ai-star">
                    {IconsControl("star")}
                    <h1>{dataGB.rating}</h1>
                  </div>
                </div>
              </El.AdditionalInfo>
              <El.AboutBook>
                <h1 className="about-book">Tentang Buku</h1>
                <h1 className="description">{dataGB.description}</h1>
              </El.AboutBook>
            </El.Content2>
          </El.ContentWrapper>
        )}
      </El.Section>
    </El.Main>
  );
};

export default BookDetail;
