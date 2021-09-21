import * as El from "./DeleteELement";
import Button from "../../../../../../otherComps/Buttons/Button";
import { useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import { useGQLAuthor, useGQLDeleteAuthor } from "../../useGQLAuthor";
import ShowMessage from "../../../../../../otherComps/ShowMessage";
import PopUpHeaderAdmin from "../../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";
const Delete = ({ id }) => {
  const { deleteAuthor, error, loading } = useGQLDeleteAuthor();
  const {
    data: dataInit,
    error: errorInit,
    loading: loadingInit,
  } = useGQLAuthor({ authorId: id });
  const { dispatch } = useContext(AdminNavCtx);
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin title="Delete" />
      <El.Body>
        <ShowMessage message={error?.message} color="danger" />
        <El.Content>
          <El.Text1>KONFIRMASI HAPUS DATA</El.Text1>
          {dataInit && (
            <El.TextWrapper>
              <El.TextGroup>
                <h1 className="key">ID</h1>
                <h1 className="separator">:</h1>
                <h1 className="value">{dataInit.id}</h1>
              </El.TextGroup>
              <El.TextGroup>
                <h1 className="key">Name</h1>
                <h1 className="separator">:</h1>
                <h1 className="value">{dataInit.name}</h1>
              </El.TextGroup>
            </El.TextWrapper>
          )}
          <El.ButtonWrapper>
            <Button
              name="Delete"
              type="button"
              color="danger"
              onClick={() => {
                deleteAuthor({ authorId: id })
                  .then(() => dispatch({ type: "CLOSE_POPUP" }))
                  .catch(() => {});
              }}
            />
            <Button
              name="Cancel"
              type="button"
              onClick={() => dispatch({ type: "CLOSE_POPUP" })}
            />
          </El.ButtonWrapper>
        </El.Content>
      </El.Body>
    </El.Main>
  );
};

export default Delete;
