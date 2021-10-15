import { useContext, useEffect, useRef } from "react";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import PopUpHeader from "../../../../otherComps/PopUpHeader/PopUpHeaderUser";
import * as El from "./OrderDetailElement";

const OrderDetail = () => {
  const { userNav, dispatch } = useContext(UserNavCtx);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Section>
        <PopUpHeader title="Pesanan" />
        <El.Body></El.Body>
      </El.Section>
    </El.Main>
  );
};

export default OrderDetail;
