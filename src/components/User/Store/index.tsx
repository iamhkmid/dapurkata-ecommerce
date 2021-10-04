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

type TFilter = {
  search?: string;
  skip: number;
  take: number;
};
const Store = () => {
  const initialFilter = { skip: 0, take: 12 };
  const [filter, setFilter] = useState<TFilter>(initialFilter);
  const { data, error, loading, refetch } = useQuery<TGQLBookCards>(
    BOOKS_WITH_FILTER,
    {
      variables: { filter },
      errorPolicy: "all",
      notifyOnNetworkStatusChange: true,
    }
  );

  const changeSearchInput = (search: string) => {
    setFilter({ ...initialFilter, search });
  };

  const changePage = (p: { skip: number; take: number }) => {
    const { skip, take } = p;
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setFilter({ skip, take, search: filter.search });
  };

  return (
    <El.Main>
      <El.Section>
        <BooksFilter changeSearchInput={changeSearchInput} />
        <BookCards data={data?.booksWithFilter?.data} isLoading={loading} />
        <BooksPagination
          changePage={changePage}
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
