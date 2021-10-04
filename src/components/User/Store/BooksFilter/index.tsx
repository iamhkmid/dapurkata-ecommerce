import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { FC } from "react";
import { TGQLBookCards, TGQLBooks } from "../../../../types/book";
import IconsControl from "../../../IconsControl";
import * as El from "./BooksFilterElement";

type TProps = {
  refetch: (
    variables: Partial<OperationVariables>
  ) => Promise<ApolloQueryResult<TGQLBookCards>>;
};

const BooksFilter: FC<TProps> = (props) => {
  const { refetch } = props;
  return (
    <El.Main>
      <El.InputWrapper>
        <El.SearchIcon>{IconsControl("search")}</El.SearchIcon>
        <El.Input
          type="text"
          placeholder="Cari berdasarkan judul/penulis"
          onChange={(e) =>
            refetch({ filter: { search: e.target.value, take: 12, skip: 0 } })
          }
        />
      </El.InputWrapper>
    </El.Main>
  );
};

export default BooksFilter;
