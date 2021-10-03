import { useContext, useEffect, useRef, useState } from "react";
import { GET_BOOKS_SORT_NEW } from "../../../graphql/book/queries";
import { AuthContext } from "../../../contexts/AuthCtx";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import { TBookCard, TGQLGetBookCards } from "../../../types/book";
import * as El from "./StoreElement";
import { ShoppingCartCtx } from "../../../contexts/ShoppingCartCtx";
import { useQuery } from "@apollo/client";
import ImageResponsive from "../../otherComps/ImageResponsive";
import IconsControl from "../../IconsControl";
import NumberFormat from "react-number-format";
import BookCards from "./BookCards";
import SearchInput from "./SearchInput";

const Store = () => {
  const { data, error, loading, refetch } = useQuery<TGQLGetBookCards>(
    GET_BOOKS_SORT_NEW,
    {
      errorPolicy: "none",
      notifyOnNetworkStatusChange: true,
    }
  );

  return (
    <El.Main>
      <El.Section>
        <SearchInput refetch={refetch} />
        <BookCards data={data?.books} isLoading={loading} />
      </El.Section>
    </El.Main>
  );
};

export default Store;
