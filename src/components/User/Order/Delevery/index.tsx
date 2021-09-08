import { FC, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { OrderCtx } from "../../../../contexts/OrderCtx";
import IconsControl from "../../../IconsControl";
import Destination from "./Destination";
import ShippingMethod from "./ShippingMethod";
import * as El from "./DeleveryElement";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import Payment from "./Payment";

type TContent = {
  name: string;
  ContentComp?: FC;
  disabled?: boolean;
};
const Content: FC<TContent> = (Props) => {
  const { name, ContentComp, disabled } = Props;
  const [isShowed, setIsShowed] = useState<boolean>(!disabled);

  useEffect(() => {
    setIsShowed(!disabled);
  }, [disabled]);
  return (
    <El.Content>
      <El.ContentHeader
        onClick={() => !disabled && setIsShowed(!isShowed)}
        disabled={disabled}
      >
        <El.ContentTitle>{name}</El.ContentTitle>
        <El.DropdownIconWrapper isShowed={isShowed} disabled={disabled}>
          {IconsControl("chevron-up")}
        </El.DropdownIconWrapper>
      </El.ContentHeader>
      <El.ContentBody isShowed={isShowed}>
        {ContentComp && <ContentComp />}
      </El.ContentBody>
    </El.Content>
  );
};

const Delevery = () => {
  const { order } = useContext(OrderCtx);
  const { shoppingCart } = useContext(ShoppingCartCtx);

  const isBuyNow =
    order.order.type === "buy-now" &&
    !!order.order.book &&
    !!order.order.amount;
  const isSCart =
    order.order.type === "shoppingcart" && shoppingCart.data.length > 0;

  return (
    <El.Main>
      {!isBuyNow && !isSCart && <El.EmptyCart>Keranjang Kosong</El.EmptyCart>}
      {(isBuyNow || isSCart) && (
        <div>
          <Content
            name="Tujuan Pengiriman"
            ContentComp={Destination}
            disabled={false}
          ></Content>
          <Content
            name="Metode Pengiriman"
            ContentComp={ShippingMethod}
            disabled={!order.recipient.data.recipient}
          ></Content>
          <Content
            name="Pembayaran"
            ContentComp={Payment}
            disabled={
              !order.recipient.data.recipient ||
              !order.courier.selected.courier ||
              !!order.courier?.error
            }
          ></Content>
        </div>
      )}
    </El.Main>
  );
};

export default Delevery;
