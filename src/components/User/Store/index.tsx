import { useContext, useEffect, useRef, useState } from "react";
import { GET_BOOKS_SORT_NEW } from "../../../graphql/book/queries";
import { AuthContext } from "../../../contexts/AuthCtx";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import { TBookCard, TGQLGetBookCards } from "../../../types/book";
import BookCard from "../../otherComps/BookCard";
import * as El from "./StoreElement";
import { ShoppingCartCtx } from "../../../contexts/ShoppingCartCtx";
import { useQuery } from "@apollo/client";

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
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (data) {
      setBooks(data.books);
    }
  }, [data]);

  return (
    <El.Main>
      <El.Section1>
        <El.SectionTitle>Terbaru</El.SectionTitle>
        <El.ItemGroup>
          {books &&
            books.map((book, index) => {
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
                <div
                  key={book.id}
                  onClick={() =>
                    dispatch({
                      type: "SHOW_POPUP",
                      value: { name: "BOOK_DETAIL", value: book.id },
                    })
                  }
                >
                  <BookCard book={bookData} />
                </div>
              );
            })}
        </El.ItemGroup>
      </El.Section1>
      <El.Section2>
        <El.SectionTitle>Pilihan Editor</El.SectionTitle>
        <El.ItemGroup>
          {books &&
            books.map((book, index) => {
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
                <div key={book.id}>
                  <BookCard book={bookData} />
                </div>
              );
            })}
        </El.ItemGroup>
      </El.Section2>
      <El.Section3></El.Section3>
    </El.Main>
  );
};

export default Store;
