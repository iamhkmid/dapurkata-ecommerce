import * as El from "./DetailELement";
import Button from "../../../../../../otherComps/Buttons/Button";
import { useContext } from "react";
import { AdminNavCtx } from "../../../../../../../contexts/AdminNavCtx";
import Moment from "moment";
import { useGQLPublisher } from "../../useGQLPublisher";
import PopUpHeaderAdmin from "../../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";

const Detail = ({ id }) => {
  const { dispatch } = useContext(AdminNavCtx);
  const { data, error, loading } = useGQLPublisher({ publisherId: id });
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin title="Detail" />
      <El.Body>
        {data && (
          <El.Table>
            <tbody>
              <tr>
                <td>id</td>
                <td>{data.id}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{data.name}</td>
              </tr>
              <tr>
                <td>Update At</td>
                <td>
                  {Moment(data.updatedAt).local().format("DD-MM-YYYY hh:mm a")}
                </td>
              </tr>
              <tr>
                <td>Create At</td>
                <td>
                  {Moment(data.createdAt).local().format("DD-MM-YYYY hh:mm a")}
                </td>
              </tr>
            </tbody>
          </El.Table>
        )}
      </El.Body>
    </El.Main>
  );
};

export default Detail;
