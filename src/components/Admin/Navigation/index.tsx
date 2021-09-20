import { AdminNavCtx } from "../../../contexts/AdminNavCtx";
import * as El from "./NavigationElement";
import Sidebar from "./Sidebar";
import { FC, useContext } from "react";
import Header from "./Header";
import PopUpControl from "../PopUpControl";
import SectionInfo from "./SectionInfo";
const Navigation: FC = ({ children }) => {
  const { adminNav } = useContext(AdminNavCtx);
  return (
    <El.Main>
      <PopUpControl />
      <El.AdminContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Header />
        <Sidebar />
        <El.AdminWrapper isOpen={adminNav.showSidebar}>
          <SectionInfo />
          {children}
          <El.Footer>DapurKata &copy; 2021</El.Footer>
        </El.AdminWrapper>
      </El.AdminContainer>
    </El.Main>
  );
};

export default Navigation;
