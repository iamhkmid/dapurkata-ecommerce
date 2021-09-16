import { useContext, useEffect, useRef, useState } from "react";
import { GET_BOOKS_SORT_NEW } from "../../../graphql/book/queries";
import { AuthContext } from "../../../contexts/AuthCtx";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import { TBookCard, TGQLGetBookCards } from "../../../types/book";
import * as El from "./StoreElement";
import { ShoppingCartCtx } from "../../../contexts/ShoppingCartCtx";
import { useQuery } from "@apollo/client";
import CoverResponsive from "./Cover/CoverResponsive";
import IconsControl from "../../IconsControl";
import NumberFormat from "react-number-format";

const Store = () => {
  const { user } = useContext(AuthContext);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const { dispatch } = useContext(UserNavCtx);
  const { data, error, loading } = useQuery<TGQLGetBookCards>(
    GET_BOOKS_SORT_NEW,
    {
      errorPolicy: "none",
    }
  );

  return (
    <El.Main>
      <El.Section>
        <El.Cards>
          {!!data?.books &&
            data?.books.map((book, index) => {
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
                      value: { name: "BOOK_DETAIL", value: book.id },
                    })
                  }
                >
                  <El.CoverWrapper>
                    <CoverResponsive url={coverUrl} />
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
                      <div className="star">
                        {IconsControl("star")}
                        <h1>{book.rating}</h1>
                      </div>
                    </div>
                  </El.BookInfo>
                </El.Card>
              );
            })}
        </El.Cards>
      </El.Section>
    </El.Main>
  );
};

export default Store;
