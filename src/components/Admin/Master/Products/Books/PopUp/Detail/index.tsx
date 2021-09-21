import * as El from "./DetailELement";
import Button from "../../../../../../otherComps/Buttons/Button";
import { useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import DetailInfo from "./DetailInfo";
import LoadingWrapper from "../../../../../../otherComps/Loading/LoadingWrapper";
import { useGQLGetBook } from "../../useGQLBook";
import PopUpHeaderAdmin from "../../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";

const Detail = ({ id }) => {
  const { dispatch } = useContext(AdminNavCtx);
  const { dataGBook, errorGBook, loadGBook } = useGQLGetBook({ bookId: id });
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin title="Detail" />
      <El.DetailBody>
        {loadGBook && (
          <El.LoadingWrapper>
            <LoadingWrapper />
          </El.LoadingWrapper>
        )}
        {dataGBook && <DetailInfo data={dataGBook} />}
      </El.DetailBody>
    </El.Main>
  );
};

export default Detail;
