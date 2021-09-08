import Table from "../../../../../otherComps/Table";
import * as El from "./ListELement";
import { columns } from "./columns";
import { useGQLCategories } from "../useGQLCategory";
import { useState } from "react";

const List = () => {
  const { data, loading, error } = useGQLCategories();
  return (
    <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Table columns={columns} data={data} />
    </El.Container>
  );
};

export default List;
