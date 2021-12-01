import { FC } from "react";
import LoadingPopup from "../../../../otherComps/Loading/LoadingPopup";
import PopUpHeaderAdmin from "../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";
import * as El from "./OrderDetailElement";

type TProps = { orderId: string };
const OrderDetail: FC<TProps> = ({ orderId }) => {
  return (
    <El.Main>
      <PopUpHeaderAdmin title="Detail Pesanan" />
      {true && <LoadingPopup />}
      {false && (
        <El.Section>
          <div></div>
        </El.Section>
      )}
    </El.Main>
  );
};

export default OrderDetail;
