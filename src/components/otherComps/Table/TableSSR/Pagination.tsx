import * as El from "./PaginationElement";

const Pagination = ({ paginationProps }) => {
  const {
    previousPage,
    canPreviousPage,
    nextPage,
    canNextPage,
    pageIndex,
    pageOptions,
  } = paginationProps;

  return (
    <El.PaginationContainer>
      <El.PageInfo>
        <El.Text1>Page</El.Text1>
        <El.Text2>
          {pageIndex + 1} of {pageOptions.length}
        </El.Text2>
      </El.PageInfo>
      <El.ButtonWrapper>
        <El.ButtonElement
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Prev
        </El.ButtonElement>
        <El.ButtonElement onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </El.ButtonElement>
      </El.ButtonWrapper>
    </El.PaginationContainer>
  );
};

export default Pagination;
