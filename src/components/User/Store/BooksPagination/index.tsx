import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { FC } from "react";
import { TGQLBookCards, TGQLBooks } from "../../../../types/book";
import * as El from "./BooksPaginationElement";
import Button from "./Button";

type TProps = {
  hasPrev: boolean;
  hasNext: boolean;
  skip: number;
  take: number;
  currentPage: number;
  numberOfPages: number;
  changePage: (p: { skip: number; take: number }) => void;
};
const BooksPagination: FC<TProps> = (props) => {
  const {
    changePage,
    currentPage,
    hasNext,
    hasPrev,
    numberOfPages,
    skip,
    take,
  } = props;
  return (
    <El.Main>
      <El.PageInfo>{`Halaman ${currentPage} dari ${numberOfPages}`}</El.PageInfo>
      <El.Pagination>
        <Button
          name="Prev"
          disabled={!hasPrev}
          onClick={() => changePage({ skip: skip - 1, take })}
          buttonFor="next_or_prev"
          isShowed={true}
        />
        <El.Pages>
          <Button
            name="1"
            onClick={() => changePage({ skip: 0, take })}
            buttonFor="page_number"
            active={currentPage === 1}
            isShowed={numberOfPages > 0}
          />
          {Array.from(Array(numberOfPages).keys())
            .slice(currentPage - 1, currentPage + 2)
            .map(
              (val, index) =>
                val !== 0 &&
                val + 1 !== numberOfPages && (
                  <div key={val}>
                    <Button
                      isShowed={true}
                      name={(val + 1).toString()}
                      onClick={() => changePage({ skip: val, take })}
                      buttonFor="page_number"
                      active={val + 1 === currentPage}
                    />
                  </div>
                )
            )}
          <Button
            name={numberOfPages?.toString()}
            onClick={() => changePage({ skip: numberOfPages - 1, take })}
            buttonFor="page_number"
            active={currentPage === numberOfPages}
            isShowed={numberOfPages > 1}
          />
        </El.Pages>
        <Button
          name="Next"
          disabled={!hasNext}
          onClick={() => changePage({ skip: skip + 1, take })}
          buttonFor="next_or_prev"
          isShowed={true}
        />
      </El.Pagination>
    </El.Main>
  );
};

export default BooksPagination;
