import { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import IconsControl from "../../../IconsControl";
import SearchInput from "./SearchInput";
import * as El from "./TableElement";
import Pagination from "./Pagination";
import SelectSize from "./SelectSize";
import { FC } from "react";

type TTableSSR = {
  data: any[];
  columns: any[];
  currentPage: number;
  setPage: (val: number) => void;
  perPage: number;
  setPerPage: (val: number) => void;
  totalPage: number;
  isLoading: boolean;
};

const TableSSR: FC<TTableSSR> = (Props) => {
  const {
    data,
    columns,
    currentPage,
    setPage,
    perPage,
    setPerPage,
    totalPage,
  } = Props;
  const mColumns = useMemo(() => columns, [columns]);
  const mData = useMemo(() => data, [data]);

  const tableInstance = useTable(
    {
      columns: mColumns,
      data: mData,
      initialState: {
        hiddenColumns: columns.map(
          (column) => column.hidden && (column.accessor || column.id)
        ),
      },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    pageOptions,
    canPreviousPage,
    setPageSize,
    prepareRow,
    setGlobalFilter,
    state,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;
  const paginationProps = {
    previousPage,
    canPreviousPage,
    nextPage,
    canNextPage,
    pageIndex,
    pageOptions,
  };
  return (
    <El.Main>
      <El.TableHeader>
        <SelectSize setPageSize={setPageSize} pageSize={pageSize} />
        <SearchInput filter={globalFilter} setFilter={setGlobalFilter} />
      </El.TableHeader>
      <El.TableWrapper>
        <El.TableElement {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroups) => (
              <tr {...headerGroups.getFooterGroupProps()}>
                {headerGroups.headers.map((column) => (
                  <th
                    {...column.getHeaderProps([
                      column.getSortByToggleProps(),
                      {
                        className: column.className,
                      },
                    ])}
                  >
                    <El.ThWrapper>
                      {column.render("Header")}

                      {column.isSorted ? (
                        <El.ThIcon
                          rotare={column.isSortedDesc ? true : false}
                          hide={false}
                        >
                          {IconsControl("chevron-up")}
                        </El.ThIcon>
                      ) : (
                        <El.ThIcon rotare={false} hide={true}>
                          {IconsControl("chevron-up")}
                        </El.ThIcon>
                      )}
                    </El.ThWrapper>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>
                      <El.TdWrapper>{cell.render("Cell")}</El.TdWrapper>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </El.TableElement>
      </El.TableWrapper>
      <El.Footer></El.Footer>
    </El.Main>
  );
};

export default TableSSR;
