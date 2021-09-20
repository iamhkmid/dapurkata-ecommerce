import { useRef } from "react";
import { FC, useContext, useEffect, useState } from "react";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import IconsControl from "../../IconsControl";
import * as El from "./NavbarMessageElement";
type TMessage = {
  message: string;
  color: "danger" | "success" | "warning";
};
const NavbarMessage: FC = () => {
  const { userNav, dispatch } = useContext(UserNavCtx);
  const [isShowed, setIsShowed] = useState<boolean>(false);
  const [msg, setMsg] = useState<TMessage>(null);
  const timeout = useRef<NodeJS.Timeout>(undefined);
  const close = () => {
    dispatch({ type: "CLOSE_MESSAGE" });
  };
  useEffect(() => {
    if (userNav.message.message) {
      clearTimeout(timeout.current);
      timeout.current = setTimeout(close, 4000);
      setIsShowed(true);
      setMsg({
        message: userNav.message.message,
        color: userNav.message.color,
      });
    } else {
      setIsShowed(false);
    }
  }, [userNav.message.message]);

  return (
    <El.Main isShowed={isShowed} color={msg?.color}>
      <El.Message>{msg?.message}</El.Message>
      <El.BtnWrapper
        onClick={() => dispatch({ type: "CLOSE_MESSAGE" })}
        color={msg?.color}
      >
        {IconsControl("x")}
      </El.BtnWrapper>
    </El.Main>
  );
};

export default NavbarMessage;
