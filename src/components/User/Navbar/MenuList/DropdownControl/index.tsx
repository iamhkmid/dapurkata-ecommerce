import Services from "./Services";
import ShoppingCart from "./ShoppingCart";

const DropdownControl = ({ name }) => {
  switch (name) {
    case "SERVICES":
      return <Services />;
    case "CART":
      return <ShoppingCart />;
    case "MAIL":
      return null;
    default:
      return null;
      break;
  }
};

export default DropdownControl;
