import * as El from "./NotificationElement";
import CartList from "../../../Cart/CartList";

const Notification = () => {
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <CartList />
    </El.Main>
  );
};

export default Notification;
