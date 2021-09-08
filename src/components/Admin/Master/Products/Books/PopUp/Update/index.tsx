import { useContext, useState } from "react";
import { AdminContext } from "../../../../../../../contexts/AdminNavCtx";
import PopUpHeader from "../../../../../../otherComps/PopUpHeader";
import FormData from "./FormData";
import Sidebar from "./Sidebar";
import * as El from "./UpdateElement";

const Update = ({ id }) => {
  const { dispatch } = useContext(AdminContext);
  const [navState, setNavState] = useState(0);
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Section>
        <PopUpHeader
          title="Update"
          close={() => dispatch({ type: "CLOSE_POPUP" })}
          withSidebar={{ showSidebar, setShowSidebar }}
        />
        <El.Body>
          <Sidebar
            navState={navState}
            setNavState={setNavState}
            showSidebar={showSidebar}
          />
          <El.Content withSidebar={showSidebar}>
            {navState === 0 && <FormData bookId={id} />}
          </El.Content>
        </El.Body>
      </El.Section>
    </El.Main>
  );
};

export default Update;
