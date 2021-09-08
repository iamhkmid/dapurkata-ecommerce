import { useContext, useEffect } from "react";
import Table from "../../../../otherComps/Table";
import * as El from "./ListELement";
import { columns } from "./columns";
import { useGQLUsersAL } from "../useGQLUser";

const AllUsers = () => {
  const { data } = useGQLUsersAL();

  return (
    <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Table columns={columns} data={data} />
    </El.Container>
  );
};

export default AllUsers;
