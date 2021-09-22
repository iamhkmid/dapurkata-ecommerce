import { useRouter } from "next/router";
import { FC, useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import { TCart } from "../../../../types/shoppingCart";
import Button from "../../../otherComps/Buttons/Button";
import PopUpHeader from "../../../otherComps/PopUpHeader/PopUpHeaderUser";
import AddCartInput from "../../Cart/AddCartInput";
import DeleteCart from "../../Cart/DeleteCart";
import UpdateCartInput from "../../Cart/UpdateCartInput";
import * as El from "./BookDetailElement";
import { useGQLCreateSC, useGQLGetbook } from "./useGQL";
import ImageResponsive from "../../../otherComps/ImageResponsive";

type TBookDetail = {
  bookId: string;
};

const BookDetail: FC<TBookDetail> = ({ bookId }) => {
  const { userNav, dispatch } = useContext(UserNavCtx);
  const { user } = useContext(AuthContext);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const { push, pathname } = useRouter();
  const [coverURL, setCoverURL] = useState<string>(null);
  const [amount, setAmount] = useState<number>(1);
  const [currCart, setCurrCart] = useState<TCart>(null);

  const { dataGB, loadGB, errorGB } = useGQLGetbook({ bookId });
  const { createShoppingCart, data, error, loading } = useGQLCreateSC();

  type TbuyNowHandler = { amount: number; bookId: string };
  const buyNowHandler = (props: TbuyNowHandler) => {
    const { amount, bookId } = props;
    if (!user) {
      push(`/auth/signin?next=${pathname}`);
      dispatch({ type: "CLOSE_POPUP" });
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          message: "Anda harus login terlebih dahulu",
          color: "warning",
        },
      });
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
      shoppingCart.data.find((val) => val.Book.id === bookId) || null;
    setCurrCart(findCart);
  }, [shoppingCart]);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeader
        title={`${dataGB?.title} - ${dataGB?.Author?.name}`}
        themeToggle={true}
      />
      {dataGB && (
        <El.ContentWrapper>
          <El.Content>
            <El.Images>
              <El.CoverWrapper>
                <div>
                  <ImageResponsive
                    src={coverURL}
                    alt={dataGB.title}
                    height={220}
                    width={150}
                    quality={75}
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
                    isLoading={loading}
                    disabled={
                      shoppingCart.loading ||
                      loadGB ||
                      (user && user.role !== "USER") ||
                      !!currCart
                    }
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
                    onClick={() => buyNowHandler({ amount, bookId: dataGB.id })}
                    disabled={
                      shoppingCart.loading ||
                      loadGB ||
                      (user && user.role !== "USER") ||
                      !!currCart
                    }
                  />
                </El.ActionBtn>
              </El.OrderInfo>
            </El.InfoWrapper>
          </El.Content>
          <div className="gap-border short"></div>
          <El.Content2>
            <El.Categories>
              <h1 className="section-name">Kategori</h1>
              <div className="category">
                {dataGB.Category.map((val) => (
                  <div key={val.id}>{val.name}</div>
                ))}
              </div>
            </El.Categories>
            <div className="gap-border"></div>
            <El.AdditionalInfo>
              <h1 className="section-name">Detail</h1>
              <div className="info-wrapper">
                <div>
                  <h1 className="ai-name">Edisi</h1>
                  <h1 className="ai-value">{dataGB.edition}</h1>
                </div>
                <div>
                  <h1 className="ai-name">Seri</h1>
                  <h1 className="ai-value">{dataGB.series}</h1>
                </div>
                <div>
                  <h1 className="ai-name">Berat</h1>
                  <h1 className="ai-value">{`${dataGB.weight} gram`}</h1>
                </div>
                <div>
                  <h1 className="ai-name">Panjang</h1>
                  <h1 className="ai-value">{`${dataGB.lenght} cm`}</h1>
                </div>
                <div>
                  <h1 className="ai-name">Lebar</h1>
                  <h1 className="ai-value">{`${dataGB.width} cm`}</h1>
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
                  <h1 className="ai-name">Bahasa</h1>
                  <h1 className="ai-value">{dataGB.language}</h1>
                </div>
                <div>
                  <h1 className="ai-name">ISBN</h1>
                  <h1 className="ai-value">{dataGB.isbn}</h1>
                </div>
                <div>
                  <h1 className="ai-name">Penerbit</h1>
                  <h1 className="ai-value">{dataGB.Publisher.name}</h1>
                </div>
              </div>
            </El.AdditionalInfo>
            <div className="gap-border"></div>
            <El.AboutBook>
              <h1 className="section-name">Tentang Buku</h1>
              <h1 className="description">{dataGB.description}</h1>
            </El.AboutBook>
          </El.Content2>
        </El.ContentWrapper>
      )}
    </El.Main>
  );
};

export default BookDetail;
