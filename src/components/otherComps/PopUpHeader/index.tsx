import { FC, useEffect } from "react";
import { useWindowSize } from "react-use";
import IconsControl from "../../IconsControl";
import ThemeToggle from "../Buttons/ThemeToggle";
import * as El from "./PopUpHeaderElement";

type TPopUpHeader = {
  title?: string;
  close: () => void;
  withSideMenu?: {
    setShowSideMenu: (p: boolean) => void;
    showSideMenu: boolean;
  };
  themeToggle?: boolean;
};

const PopUpHeader: FC<TPopUpHeader> = (props) => {
  const { close, title, withSideMenu: ws, themeToggle } = props;
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
              {IconsControl("chevron-left")}
            </El.IconWrapper>
            {themeToggle && <ThemeToggle />}
          </El.ButtonGroup>
        )}
      </El.Left>
      <El.CloseBtn onClick={close}>{IconsControl("x")}</El.CloseBtn>
    </El.Main>
  );
};

export default PopUpHeader;
