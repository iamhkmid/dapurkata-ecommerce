import { FC, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthCtx";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import { getMessage } from "../../../services/getMessage";
import Button from "../Buttons/Button";
import PopUpHeader from "../PopUpHeader";
import * as El from "./PopUpAuthErrorElement";

const PopUpAuthError: FC = () => {
  const { setError, error } = useContext(AuthContext);
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Section>
        <PopUpHeader title="Message" close={() => setError(null)} />
        <El.Body>
          <El.Message>{getMessage({ message: error })}</El.Message>
          <El.ButtonWrapper>
            <Button type="button" name="Oke" onClick={() => setError(null)} />
          </El.ButtonWrapper>
        </El.Body>
      </El.Section>
    </El.Main>
  );
};

export default PopUpAuthError;
