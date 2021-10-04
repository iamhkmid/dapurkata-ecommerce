import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { FC } from "react";
import { TGQLBookCards, TGQLBooks } from "../../../../types/book";
import IconsControl from "../../../IconsControl";
import * as El from "./BooksFilterElement";

type TProps = {
  changeSearchInput: (p: string) => void;
};

const BooksFilter: FC<TProps> = (props) => {
  const { changeSearchInput } = props;
  return (
    <El.Main>
      <El.InputWrapper>
        <El.SearchIcon>{IconsControl("search")}</El.SearchIcon>
        <El.Input
          type="text"
          placeholder="Cari berdasarkan judul/penulis"
          onChange={(e) => changeSearchInput(e.target.value)}
        />
      </El.InputWrapper>
    </El.Main>
  );
};

export default BooksFilter;
