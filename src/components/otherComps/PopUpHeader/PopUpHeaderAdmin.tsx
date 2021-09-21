import { useContext } from "react";
import { FC, useEffect } from "react";
import { useWindowSize } from "react-use";
import { AdminNavCtx } from "../../../contexts/AdminNavCtx";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import IconsControl from "../../IconsControl";
import ThemeToggle from "../Buttons/ThemeToggle";
import * as El from "./PopUpHeaderElement";

type TPopUpHeader = {
  title?: string;
  withSideMenu?: {
    setShowSideMenu: (p: boolean) => void;
    showSideMenu: boolean;
  };
  themeToggle?: boolean;
};

const PopUpHeaderAdmin: FC<TPopUpHeader> = (props) => {
  const { title, withSideMenu: ws, themeToggle } = props;
  const { dispatch } = useContext(AdminNavCtx);
  const { width } = useWindowSize();
  useEffect(() => {
    if (ws) {
      width > 960 && ws.setShowSideMenu(true);
      width <= 960 && ws.setShowSideMenu(false);
    }
  }, [width]);
  return (
    <El.Main>
      <El.Left>
        <El.Title>{title}</El.Title>
        {ws && (
          <El.ButtonGroup>
            <El.IconWrapper
              showSideMenu={ws.showSideMenu}
              onClick={() => ws.setShowSideMenu(!ws.showSideMenu)}
            >
              {IconsControl("chevron-back-outline")}
            </El.IconWrapper>
            {themeToggle && <ThemeToggle />}
          </El.ButtonGroup>
        )}
      </El.Left>
      <El.CloseBtn onClick={() => dispatch({ type: "CLOSE_POPUP" })}>
        {IconsControl("x")}
      </El.CloseBtn>
    </El.Main>
  );
};

export default PopUpHeaderAdmin;
