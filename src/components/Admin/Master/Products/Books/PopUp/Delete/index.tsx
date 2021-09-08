import * as El from "./DeleteELement";
import Button from "../../../../../../otherComps/Buttons/Button";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../../../../../../contexts/AdminNavCtx";
import { useGQLDeleteBook, useGQLGetBookDel } from "../../useGQLBook";
import PopUpHeader from "../../../../../../otherComps/PopUpHeader";
import FormMessage from "../../../../../../otherComps/ShowMessage";

const Delete = ({ id }) => {
  const { dispatch } = useContext(AdminContext);
  const { dataGBD, errorGBD, loadGBD } = useGQLGetBookDel({ bookId: id });
  const { deleteBook, data, loading, error } = useGQLDeleteBook();
  return (
    <El.Main
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
          <FormMessage message={error?.message} color="danger" />
          <El.Content>
            <El.Text1>Are you sure you want to delete?</El.Text1>
            <El.TextWrapper>
              <El.TextGroup>
                <h1 className="key">id</h1>
                <h1 className="separator">:</h1>
                <h1 className="value">{dataGBD?.id}</h1>
              </El.TextGroup>
              <El.TextGroup>
                <h1 className="key">Title</h1>
                <h1 className="separator">:</h1>
                <h1 className="value">{dataGBD?.title}</h1>
              </El.TextGroup>
            </El.TextWrapper>
            <El.ButtonWrapper>
              <Button
                name="Delete"
                type="button"
                color="danger"
                onClick={() => {
                  deleteBook({ bookId: id })
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
    </El.Main>
  );
};

export default Delete;
