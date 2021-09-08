import { FC, useEffect } from "react";
import { useWindowSize } from "react-use";
import IconsControl from "../../IconsControl";
import ThemeToggle from "../Buttons/ThemeToggle";
import * as El from "./PopUpHeaderElement";

type TPopUpHeader = {
  title?: string;
  close: () => void;
  withSidebar?: { setShowSidebar: (p: boolean) => void; showSidebar: boolean };
};

const PopUpHeader: FC<TPopUpHeader> = ({ close, title, withSidebar: ws }) => {
  const { width } = useWindowSize();
  useEffect(() => {
    if (ws) {
      width > 960 && ws.setShowSidebar(false);
      width <= 960 && ws.setShowSidebar(true);
    }
  }, [width]);
  return (
    <El.Main>
      <El.Left>
        <El.Title>{title}</El.Title>
        {ws && (
          <El.ButtonGroup>
            <El.IconWrapper
              withSidebar={ws.showSidebar}
              onClick={() => ws.setShowSidebar(!ws.showSidebar)}
            >
              {IconsControl("chevron-left")}
            </El.IconWrapper>
            <ThemeToggle />
          </El.ButtonGroup>
        )}
      </El.Left>
      <El.CloseBtn onClick={close}>{IconsControl("x")}</El.CloseBtn>
    </El.Main>
  );
};

export default PopUpHeader;
