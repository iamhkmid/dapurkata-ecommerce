import { useState } from "react";
import { accountMenu } from "../../../data/accountMenu";
import * as El from "./AccountElement";
import ContentState from "./ContentState";
import SideMenu from "./SideMenu";

const Account = () => {
  const [menuId, setMenuId] = useState(accountMenu[1].id);
  const changeMenu = (id: string) => {
    setMenuId(id);
  };
  return (
    <El.Main>
      <El.Section>
        <El.PageInfo>
          <El.TextInfo>
            <h1 className="navigation">U / Account /&nbsp;</h1>
            <h1 className="state">
              {`${accountMenu.find((val) => val.id === menuId)?.name}`}
            </h1>
          </El.TextInfo>
        </El.PageInfo>
        <El.Content>
          <SideMenu changeMenu={changeMenu} menuId={menuId} />
          <ContentState />
        </El.Content>
      </El.Section>
    </El.Main>
  );
};
export default Account;
