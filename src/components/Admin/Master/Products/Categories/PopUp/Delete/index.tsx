import * as El from "./DeleteELement";
import Button from "../../../../../../otherComps/Buttons/Button";
import { useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import { useGQLCategory, useGQLDeleteCategory } from "../../useGQLCategory";
import PopUpHeader from "../../../../../../otherComps/PopUpHeader";
import ShowMessage from "../../../../../../otherComps/ShowMessage";
const Delete = ({ id }) => {
  const { deleteCategory, error } = useGQLDeleteCategory();
  const { data } = useGQLCategory({ categoryId: id });
  const { dispatch } = useContext(AdminNavCtx);
  return (
    <El.Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Section>
        <PopUpHeader
          title="Delete"
          close={() => dispatch({ type: "CLOSE_POPUP" })}
        />
        <El.Body>
          <ShowMessage message={error?.message} color="danger" />
          <El.Content>
            <El.Text1>KONFIRMASI HAPUS DATA</El.Text1>
            <El.TextWrapper>
              <El.TextGroup>
                <h1 className="key">ID</h1>
                <h1 className="separator">:</h1>
                <h1 className="value">{data?.id}</h1>
              </El.TextGroup>
              <El.TextGroup>
                <h1 className="key">Name</h1>
                <h1 className="separator">:</h1>
                <h1 className="value">{data?.name}</h1>
              </El.TextGroup>
            </El.TextWrapper>
            <El.ButtonWrapper>
              <Button
                name="Delete"
                type="button"
                color="danger"
                onClick={() => {
                  deleteCategory({ categoryId: id })
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
      </El.Section>
    </El.Container>
  );
};

export default Delete;
