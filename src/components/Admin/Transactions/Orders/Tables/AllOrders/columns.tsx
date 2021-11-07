import moment from "moment";
import "moment/locale/id";
import { useContext } from "react";
import NumberFormat from "react-number-format";
import { AdminNavCtx } from "../../../../../../contexts/AdminNavCtx";
import {
  getShippingStatus,
  getTransactionStatus,
} from "../../../../../../services/getStatus";
import Button from "../../../../../otherComps/Buttons/Button";

import RowBtn from "../../../../../otherComps/Buttons/RowBtn";
import * as El from "./ListElement";
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
    Header: "Nama",
    accessor: (d) =>
      `${d.CustomerDetails.firstName} ${d.CustomerDetails.lastName || ""}`,
  },
  {
    Header: "Status Pembayaran",
    accessor: (d) => getTransactionStatus(d.transactionStatus),
    Cell: (d) => (
      <El.TransactionStatus status={d.row.original.transactionStatus}>
        {d.value}
      </El.TransactionStatus>
    ),
  },
  {
    Header: "Status Pengiriman",
    accessor: (d) => getShippingStatus(d.shippingStatus),
    Cell: (d) => (
      <El.ShippingStatus status={d.row.original.shippingStatus}>
        {d.value}
      </El.ShippingStatus>
    ),
  },
  {
    Header: "Waktu Transaksi",
    accessor: (d) =>
      moment(d.transactionTime)
        .locale("id")
        .format("dddd, DD MMMM YYYY | HH:mm"),
  },
  {
    Header: "Action",
    className: "actions",
    Cell: (d) => {
      const { dispatch } = useContext(AdminNavCtx);
      return (
        <El.ActionColumn>
          <Button name="UBAH" type="button" />
        </El.ActionColumn>
      );
    },
  },
];
