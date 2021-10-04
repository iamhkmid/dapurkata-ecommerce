import { useContext, useEffect, useRef, useState } from "react";
import { BOOKS_WITH_FILTER } from "../../../graphql/book/queries";
import { AuthContext } from "../../../contexts/AuthCtx";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import { TBookCard, TGQLBookCards } from "../../../types/book";
import * as El from "./StoreElement";
import { ShoppingCartCtx } from "../../../contexts/ShoppingCartCtx";
import { useQuery } from "@apollo/client";
import ImageResponsive from "../../otherComps/ImageResponsive";
import IconsControl from "../../IconsControl";
import NumberFormat from "react-number-format";
import BookCards from "./BookCards";
import BooksFilter from "./BooksFilter";
import BooksPagination from "./BooksPagination";

const Store = () => {
  const { data, error, loading, refetch } = useQuery<TGQLBookCards>(
    BOOKS_WITH_FILTER,
    {
      variables: {
        filter: {
          skip: 0,
          take: 12,
        },
      },
      errorPolicy: "none",
      notifyOnNetworkStatusChange: true,
    }
  );

  return (
    <El.Main>
      <El.Section>
        <BooksFilter refetch={refetch} />
        <BookCards data={data?.booksWithFilter?.data} isLoading={loading} />
        <BooksPagination
          refetch={refetch}
          hasPrev={data?.booksWithFilter?.hasPrev}
          hasNext={data?.booksWithFilter?.hasNext}
          currentPage={data?.booksWithFilter?.currentPage}
          numberOfPages={data?.booksWithFilter?.numberOfPages}
          skip={data?.booksWithFilter?.skip}
          take={data?.booksWithFilter?.take}
        />
      </El.Section>
    </El.Main>
  );
};

export default Store;
