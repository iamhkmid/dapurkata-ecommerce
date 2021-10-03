import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { FC } from "react";
import { TGQLBooks } from "../../../../types/book";
import IconsControl from "../../../IconsControl";
import * as El from "./SearchInputElement";

type TProps = {
  refetch: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<TGQLBooks>>;
};

const SearchInput: FC<TProps> = (props) => {
  const { refetch } = props;
  return (
    <El.Main>
      <El.InputWrapper>
        <El.SearchIcon>{IconsControl("search")}</El.SearchIcon>
        <El.Input
          type="text"
          onChange={(e) => refetch({ filter: { search: e.target.value } })}
        />
      </El.InputWrapper>
    </El.Main>
  );
};

export default SearchInput;
