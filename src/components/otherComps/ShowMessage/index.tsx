import { useState } from "react";
import { useEffect } from "react";
import { FC } from "react";
import IconsControl from "../../IconsControl";
import * as El from "./ShowMessageElement";

type TProps = {
  message: string;
  color: "danger" | "success" | "warning";
};

const ShowMessage: FC<TProps> = ({ color, message }) => {
  const [isShowed, setIsShowed] = useState<boolean>(false);

  useEffect(() => {
    if (message) {
      setIsShowed(true);
    }
  }, [message]);

  return (
    <El.Main isShowed={isShowed} color={color}>
      <El.Message>{message}</El.Message>
      <El.BtnWrapper onClick={() => setIsShowed(false)}>
        {IconsControl("x")}
      </El.BtnWrapper>
    </El.Main>
  );
};

export default ShowMessage;
