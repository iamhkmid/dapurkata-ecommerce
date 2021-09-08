import Moment from "moment";
import { useContext } from "react";
import { AdminContext } from "../../../../../contexts/AdminNavCtx";

import RowBtn from "../../../../otherComps/Buttons/RowBtn";
import * as El from "./ListELement";
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
    Header: () => <El.DefaultColumn>Username</El.DefaultColumn>,
    accessor: "username",
  },
  {
    Header: "Name",
    Cell: (d) => {
      return `${d.row.original.firstName} ${d.row.original.lastName || ""}`;
    },
  },
  {
    Header: () => <El.DefaultColumn>Role</El.DefaultColumn>,
    accessor: "role",
  },
  {
    Header: () => <El.DefaultColumn>Email</El.DefaultColumn>,
    accessor: "email",
  },
  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: (d) => Moment(d.value).local().format("DD-MM-YYYY hh:mm a"),
    hidden: true,
  },
  {
    Header: "Updated At",
    accessor: "updatedAt",
    Cell: (d) => Moment(d.value).local().format("DD-MM-YYYY hh:mm a"),
    hidden: true,
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
                value: { name: "USER_DETAIL", value: d.row.values.id },
              })
            }
          />
          <RowBtn type="edit" onClick={() => {}} />
          <RowBtn type="delete" onClick={() => {}} />
        </El.ActionColumn>
      );
    },
  },
];
