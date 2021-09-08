import Table from "../../../../../otherComps/Table";
import * as El from "./ListELement";
import { columns } from "./columns";
import { useGQLGetBooks } from "../useGQLBook";

const List = () => {
  const { dataGBooks, errorGBooks, loadGBooks } = useGQLGetBooks();

  return (
    <El.Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Table columns={columns} data={dataGBooks} />
    </El.Container>
  );
};

export default List;
