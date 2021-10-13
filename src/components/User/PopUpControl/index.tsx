import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import PopUpMessage from "../../otherComps/PopUpMessage";
import BookDetail from "../Store/BookDetail";
import CreateRecipient from "../Order/Delevery/PopUp/CreateRecipient";
import ChangeRecipient from "../Order/Delevery/PopUp/ChangeRecipient";
import UpdateRecipient from "../Order/Delevery/PopUp/UpdateRecipient";
import OrderDetail from "../Order/PopUp";
import ChangePassword from "../Account/ContentState/PopUp/ChangePassword";
import styled from "styled-components";
import GlobalMessageUser from "../../otherComps/GlobalMessage/GlobalMessageUser";
import RegisterConfirm from "../Auth/Popup/RegisterConfirm";
import ActivateAccount from "../Auth/Popup/ActivateAccount";

export const Main = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.3rem;
`;

export const Backround = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: -1;
  background: ${({ theme }) => theme.popup};
  backdrop-filter: blur(4px);
  transition: 0.4s all ease;
  transition-property: backdrop-filter;
`;
const PopUpControl = () => {
  const {
    userNav: { popup },
  } = useContext(UserNavCtx);

  return (
    <AnimatePresence>
      {!!popup.name && (
        <Main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Backround />
          <GlobalMessageUser />
          {popup.name === "CHANGE_RECIPIENT" && <ChangeRecipient />}
          {popup.name === "ADD_RECIPIENT" && <CreateRecipient />}
          {popup.name === "UPDATE_RECIPIENT" && (
            <UpdateRecipient recipientId={popup.recipientId} />
          )}
          {popup.name === "MESSAGE" && <PopUpMessage message={popup.message} />}
          {popup.name === "BOOK_DETAIL" && <BookDetail bookId={popup.bookId} />}
          {popup.name === "CHANGE_PASSWORD" && <ChangePassword />}

          {popup.name === "REGISTER_CONFIRM" && (
            <ActivateAccount
              type="REGISTRATION"
              email={popup.email}
              fetchWaitTime={popup.fetchWaitTime}
            />
          )}
          {popup.name === "ACTIVATE_ACCOUNT" && (
            <ActivateAccount type="ACTIVATE_ACCOUNT" />
          )}
          {/* <OrderDetail /> */}
        </Main>
      )}
    </AnimatePresence>
  );
};

export default PopUpControl;
