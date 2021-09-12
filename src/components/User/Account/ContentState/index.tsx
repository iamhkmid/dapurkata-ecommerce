import { AnimatePresence } from "framer-motion";
import AddressList from "./AddressList";
import * as El from "./ContentStateElement";

const ContentState = ({ menuId }) => {
  return (
    <El.Main>
      <El.Section>
        <AnimatePresence>
          {menuId === "address-list" && <AddressList />}
        </AnimatePresence>
      </El.Section>
    </El.Main>
  );
};
export default ContentState;
