import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import PopUpMessage from "../../otherComps/PopUpMessage";
import BookDetail from "../Store/BookDetail";
import CreateRecipient from "../Order/Delevery/PopUp/CreateRecipient";
import ChangeRecipient from "../Order/Delevery/PopUp/ChangeRecipient";
import UpdateRecipient from "../Order/Delevery/PopUp/UpdateRecipient";
import OrderDetail from "../Order/PopUp";
import ChangePassword from "../Account/ContentState/PopUp/ChangePassword";
import GlobalMessage from "../../otherComps/GlobalMessage";

const PopUpControl = () => {
  const {
    userNav: { showPopUp },
  } = useContext(UserNavCtx);

  return (
    <>
      {!!showPopUp.name && <GlobalMessage />}
      <AnimatePresence>
        {showPopUp.name === "CHANGE_RECIPIENT" && <ChangeRecipient />}
        {showPopUp.name === "ADD_RECIPIENT" && <CreateRecipient />}
        {showPopUp.name === "UPDATE_RECIPIENT" && (
          <UpdateRecipient recipientId={showPopUp.recipientId} />
        )}
        {showPopUp.name === "MESSAGE" && (
          <PopUpMessage message={showPopUp.message} />
        )}
        {showPopUp.name === "BOOK_DETAIL" && (
          <BookDetail bookId={showPopUp.bookId} />
        )}
        {showPopUp.name === "CHANGE_PASSWORD" && <ChangePassword />}
        {/* <OrderDetail /> */}
      </AnimatePresence>
    </>
  );
};

export default PopUpControl;
