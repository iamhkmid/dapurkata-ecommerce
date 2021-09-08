import * as El from "./DetailELement";
import Button from "../../../../../../otherComps/Buttons/Button";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../../../../../../contexts/AdminNavCtx";
import DetailInfo from "./DetailInfo";
import LoadingWrapper from "../../../../../../otherComps/Loading/LoadingWrapper";
import { useGQLGetBook } from "../../useGQLBook";
import PopUpHeader from "../../../../../../otherComps/PopUpHeader";

const Detail = ({ id }) => {
  const { dispatch } = useContext(AdminContext);
  const { dataGBook, errorGBook, loadGBook } = useGQLGetBook({ bookId: id });
  return (
    <El.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Section>
        <PopUpHeader
          title="Detail"
          close={() => dispatch({ type: "CLOSE_POPUP" })}
        />
        <El.DetailBody>
          {loadGBook && (
            <El.LoadingWrapper>
              <LoadingWrapper />
            </El.LoadingWrapper>
          )}
          {dataGBook && <DetailInfo data={dataGBook} />}
        </El.DetailBody>
      </El.Section>
    </El.Container>
  );
};

export default Detail;
