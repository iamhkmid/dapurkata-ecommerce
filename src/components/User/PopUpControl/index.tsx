import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import PopUpMessage from "../../otherComps/PopUpMessage";
import AddCart from "../Cart/AddCart";
import CreateRecipient from "../Order/Delevery/PopUp/CreateRecipient";
import ChangeRecipient from "../Order/Delevery/PopUp/ChangeRecipient";
import UpdateRecipient from "../Order/Delevery/PopUp/UpdateRecipient";

const PopUpControl = () => {
  const {
    userNav: { showPopUp },
  } = useContext(UserNavCtx);

  return (
    <AnimatePresence>
      {showPopUp.name === "CHANGE_RECIPIENT" && <ChangeRecipient />}
      {showPopUp.name === "ADD_RECIPIENT" && <CreateRecipient />}
      {showPopUp.name === "EDIT_RECIPIENT" && <UpdateRecipient />}
      {showPopUp.name === "MESSAGE" && <PopUpMessage />}
      {showPopUp.name === "ADD_SHOPPINGCART" && <AddCart />}
      {showPopUp.name === "AUTH_ERROR" && <PopUpMessage />}
    </AnimatePresence>
  );
};

export default PopUpControl;
