import Moment from "moment";
import { useContext } from "react";
import { AdminContext } from "../../../../../../contexts/AdminNavCtx";

import RowBtn from "../../../../../otherComps/Buttons/RowBtn";
import * as El from "./columnsElement";
export const columns = [
  {
    Header: "id",
    accessor: "id",
    hidden: true,
  },
  {
    Header: "No",
    className: "number",
    Cell: (row) => {
      return <El.NumberColumn>{1 + parseInt(row.cell.row.id)}</El.NumberColumn>;
    },
  },
  {
    Header: "Title",
    accessor: "title",
    Cell: (d) => <El.Title>{d.value}</El.Title>,
  },
  { Header: "Price", accessor: "price" },
  { Header: "Stock", accessor: "stock" },
  {
    Header: "Categories",
    accessor: "Category",
    Cell: (d) => {
      return (
        <El.CategoryWrapper>
          {d.value.map((category) => (
            <El.Category key={category.id}>{category.name}</El.Category>
          ))}
        </El.CategoryWrapper>
      );
    },
  },
  {
    Header: "Author",
    accessor: "Author",
    Cell: (d) => d.value.name,
  },

  {
    Header: "Action",
    className: "actions",
    Cell: (d) => {
      const { dispatch } = useContext(AdminContext);
      return (
        <El.ActionColumn>
          <RowBtn
            type="detail"
            onClick={() =>
              dispatch({
                type: "SHOW_POPUP",
                value: { name: "bookDetail", value: d.row.values.id },
              })
            }
          />
          <RowBtn
            type="edit"
            onClick={() =>
              dispatch({
                type: "SHOW_POPUP",
                value: { name: "bookUpdate", value: d.row.values.id },
              })
            }
          />
          <RowBtn
            type="delete"
            onClick={() => {
              dispatch({
                type: "SHOW_POPUP",
                value: { name: "bookDelete", value: d.row.values.id },
              });
            }}
          />
        </El.ActionColumn>
      );
    },
  },
];
