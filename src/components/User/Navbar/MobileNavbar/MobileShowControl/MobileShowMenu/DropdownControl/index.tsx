import Services from "./Services";

const DropdownControl = ({ name, active }) => {
  switch (name) {
    case "Layanan kami":
      return <Services active={active} />;
    default:
      return null;
      break;
  }
};

export default DropdownControl;
