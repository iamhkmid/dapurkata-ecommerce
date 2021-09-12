import { FC } from "react";
import { accountMenu } from "../../../../data/accountMenu";
import * as El from "./SideMenuElement";

type TSideMenu = {
  changeMenu: (p: string) => void;
  menuId: string;
  showSideMenu: boolean;
};
const SideMenu: FC<TSideMenu> = ({ changeMenu, menuId, showSideMenu }) => {
  return (
    <El.Main active={showSideMenu}>
      <El.Ul>
        {accountMenu.map((val) => (
          <El.Li
            key={val.id}
            isActive={val.id === menuId}
            onClick={() => changeMenu(val.id)}
          >
            {val.name}
          </El.Li>
        ))}
        <El.Li className="logout">Keluar</El.Li>
      </El.Ul>
    </El.Main>
  );
};
export default SideMenu;
