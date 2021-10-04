import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { FC, useRef } from "react";
import { TGQLBookCards, TGQLBooks } from "../../../../types/book";
import IconsControl from "../../../IconsControl";
import * as El from "./BooksFilterElement";

type TProps = {
  changeSearchInput: (p: string) => void;
  search: string;
};

const BooksFilter: FC<TProps> = (props) => {
  const { changeSearchInput, search } = props;
  const inputRef = useRef<HTMLInputElement>();
  return (
    <El.Main>
      <El.InputWrapper>
        <El.Input
          type="text"
          ref={inputRef}
          placeholder="Cari berdasarkan judul/penulis"
          onChange={(e) => changeSearchInput(e.target.value)}
        />
        <El.SearchIcon className="search-icon">
          {IconsControl("search")}
        </El.SearchIcon>
        <El.CloseIcon
          className="close-icon"
          isShowed={!!search}
          onClick={() => {
            inputRef.current.value = "";
            changeSearchInput("");
          }}
        >
          {IconsControl("close-outline")}
        </El.CloseIcon>
      </El.InputWrapper>
    </El.Main>
  );
};

export default BooksFilter;
