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
    userNav: { popup },
  } = useContext(UserNavCtx);

  return (
    <>
      {!!popup.name && <GlobalMessage />}
      <AnimatePresence>
        {popup.name === "CHANGE_RECIPIENT" && <ChangeRecipient />}
        {popup.name === "ADD_RECIPIENT" && <CreateRecipient />}
        {popup.name === "UPDATE_RECIPIENT" && (
          <UpdateRecipient recipientId={popup.recipientId} />
        )}
        {popup.name === "MESSAGE" && <PopUpMessage message={popup.message} />}
        {popup.name === "BOOK_DETAIL" && <BookDetail bookId={popup.bookId} />}
        {popup.name === "CHANGE_PASSWORD" && <ChangePassword />}
        {/* <OrderDetail /> */}
      </AnimatePresence>
    </>
  );
};

export default PopUpControl;
