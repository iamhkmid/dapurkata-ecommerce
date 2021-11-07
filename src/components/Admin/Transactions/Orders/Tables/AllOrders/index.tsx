import { useContext, useEffect } from "react";
import * as El from "./ListElement";
import { columns } from "./columns";
import { useGQLOrderListsUsers } from "../../useGQLOrders";
import Table from "../../../../../otherComps/Table";

const AllOrders = () => {
  const { data } = useGQLOrderListsUsers();

  return (
    <El.Main>
      <h1 className="title">SEMUA PESANAN</h1>
      <Table columns={columns} data={data} />
    </El.Main>
  );
};

export default AllOrders;
