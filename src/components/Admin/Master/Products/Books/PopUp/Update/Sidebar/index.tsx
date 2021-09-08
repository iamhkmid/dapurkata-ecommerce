import { useState } from "react";
import * as El from "./SidebarElement";

const Sidebar = ({ navState, setNavState, showSidebar }) => {
  const sidebar = ["Data", "Images"];
  return (
    <El.Sidebar active={showSidebar}>
      <El.Menu>
        {sidebar.map((val, i) => (
          <El.Item
            key={val}
            onClick={() => setNavState(i)}
            active={navState === i}
          >
            {val}
          </El.Item>
        ))}
      </El.Menu>
    </El.Sidebar>
  );
};

export default Sidebar;
