import { FC, useContext } from "react";
import NumberFormat from "react-number-format";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import { TBookCard } from "../../../../types/book";
import IconsControl from "../../../IconsControl";
import ImageResponsive from "../../../otherComps/ImageResponsive";
import * as El from "./BookCardsElement";
import BookCardsLoading from "./BookCardsLoading";

type TProps = {
  data: TBookCard[];
  isLoading: boolean;
};

const BookCards: FC<TProps> = ({ data, isLoading }) => {
  const { user } = useContext(AuthContext);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const { dispatch } = useContext(UserNavCtx);
  return (
    <El.Main>
      {isLoading && <BookCardsLoading />}
      {!isLoading && data?.length === 0 && (
        <El.NoBook>Buku tidak ditemukan</El.NoBook>
      )}
      {!isLoading && (
        <El.Cards initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {data?.map((book, index) => {
            const inCart = shoppingCart.data.find(
              (val) => val.Book.id === book.id
            );
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
                    src={book.coverURL}
                    alt={book.title}
                    height={290}
                    width={200}
                    quality={75}
                  />
                </El.CoverWrapper>
                <El.BookInfo>
                  <div className="info1">
                    <h1 className="title">{book.title}</h1>
                    <h1 className="author">{book.authorName}</h1>
                  </div>
                  <div className="info2">
                    <h1 className="price">
                      <NumberFormat
                        prefix="Rp"
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
    </El.Main>
  );
};

export default BookCards;
