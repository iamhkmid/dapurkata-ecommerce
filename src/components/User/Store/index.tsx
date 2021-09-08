import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect, useRef, useState } from "react";
import { GET_BOOKS_SORT_NEW } from "../../../graphql/book/queries";
import { ADD_SHOPPING_CART } from "../../../graphql/shoppingCart/mutations";
import { AuthContext } from "../../../contexts/AuthCtx";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import { TBookCard, TGQLGetBookCards } from "../../../types/book";
import BookCard from "../../otherComps/BookCard";
import * as El from "./StoreElement";
import { OrderCtx } from "../../../contexts/OrderCtx";
import useScroll from "../../../hooks/useScroll";
import { ShoppingCartCtx } from "../../../contexts/ShoppingCartCtx";

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
  const [addShoppingCart, { data: data2 }] = useMutation(ADD_SHOPPING_CART, {
    errorPolicy: "none",
  });
  const addSChart = async ({ bookId }) => {
    try {
      await addShoppingCart({
        variables: { userId: user.id, bookId, amount: 1 },
      });
    } catch (err) {}
  };
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
                      value: { name: "ADD_SHOPPINGCART", value: book.id },
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
