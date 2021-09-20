import { useContext } from "react";
import Table from "../../../../../otherComps/Table";
import * as El from "./ListELement";
import { columns } from "./columns";
import { useGQLPublishers } from "../useGQLPublisher";

const List = () => {
  const { data, error, loading } = useGQLPublishers();

  return (
    <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Table columns={columns} data={data} />
    </El.Container>
  );
};

export default List;
