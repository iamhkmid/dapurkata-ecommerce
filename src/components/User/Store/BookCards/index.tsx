import { FC, useContext } from "react";
import NumberFormat from "react-number-format";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import { TBookCard, TBookCardProps } from "../../../../types/book";
import IconsControl from "../../../IconsControl";
import ImageResponsive from "../../../otherComps/ImageResponsive";
import * as El from "./BookCardsElement";
import BookCardsLoading from "./BookCardsLoading";

type TProps = {
  data: TBookCardProps[];
  isLoading: boolean;
};

const BookCards: FC<TProps> = ({ data, isLoading }) => {
  const { user } = useContext(AuthContext);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const { dispatch } = useContext(UserNavCtx);
  return (
    <>
      {isLoading && <BookCardsLoading />}
      {!isLoading && (
        <El.Cards initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {data?.map((book, index) => {
            const cover = book.BookPicture.filter(
              (img) => img.type === "COVER"
            );
            const coverUrl = cover.length > 0 && cover[0].url;
            const inCart = shoppingCart.data.find(
              (val) => val.Book.id === book.id
            );
            const bookData: TBookCard = {
              id: book.id,
              Author: book.Author,
              coverUrl,
              price: book.price,
              title: book.title,
              inCart: inCart ? true : false,
            };
            return (
              <El.Card
                key={book.id}
                onClick={() =>
                  dispatch({
                    type: "SHOW_POPUP",
                    value: { name: "BOOK_DETAIL", bookId: book.id },
                  })
                }
              >
                <El.CoverWrapper>
                  <ImageResponsive
                    src={coverUrl}
                    alt={book.title}
                    height={290}
                    width={200}
                    quality={75}
                  />
                </El.CoverWrapper>
                <El.BookInfo>
                  <div className="info1">
                    <h1 className="title">{book.title}</h1>
                    <h1 className="author">{book.Author.name}</h1>
                  </div>
                  <div className="info2">
                    <h1 className="price">
                      <NumberFormat
                        prefix="Rp"
                        suffix=",00"
                        value={book.price}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                      />
                    </h1>
                    <div className="star">{IconsControl("star")}</div>
                  </div>
                </El.BookInfo>
              </El.Card>
            );
          })}
        </El.Cards>
      )}
    </>
  );
};

export default BookCards;
