import { FC, useContext, useEffect, useRef, useState } from "react";
import NumberFormat from "react-number-format";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import {
  TGQLOrderInfoSubscription,
  TOrderPaymentInfo,
} from "../../../../../types/transaction";
import PopUpHeader from "../../../../otherComps/PopUpHeader/PopUpHeaderUser";
import * as El from "./OrderPaymentInfoElement";
import Image from "next/image";
import PaymentCode from "./PaymentCode";
import HowToPay from "./HowToPay";
import TransactionStatus from "./TransactionStatus";
import { useSubscription } from "@apollo/client";
import { ORDER_INFO_SUBSCRIPTION } from "../../../../../graphql/transaction/subscription";

type TProps = {
  order: TOrderPaymentInfo;
};
const OrderPaymentInfo: FC<TProps> = (props) => {
  const [order, setOrder] = useState<TOrderPaymentInfo>(props.order);
  const { userNav, dispatch } = useContext(UserNavCtx);
  const { data, loading, error } = useSubscription<TGQLOrderInfoSubscription>(
    ORDER_INFO_SUBSCRIPTION,
    {
      variables: { orderId: order.id },
    }
  );

  useEffect(() => {
    if (!loading && data?.orderInfo) {
      const { fraudStatus, transactionStatus, transactionTime } =
        data?.orderInfo;
      setOrder({ ...order, transactionStatus, fraudStatus, transactionTime });
    }
  }, [data?.orderInfo, loading]);

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <El.Section>
        <PopUpHeader title="Info Pembayaran" />
        <El.PaymentInfo>
          <div>
            <El.Payment>
              <El.GrossAmount>
                <h1 className="name">Total Pembayaran</h1>
                <h1 className="value">
                  <NumberFormat
                    prefix="Rp"
                    suffix=",00"
                    value={order.grossAmount}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                  />
                </h1>
              </El.GrossAmount>
              <El.PaymentService>
                <div className="payment-icon-wrapper">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_GQL_HTTP_URL}${order.PaymentService.icon}`}
                    height={40}
                    width={40}
                    alt="payment logo"
                    layout="fixed"
                  />
                </div>
                <div className="name">
                  <h1 className="type">
                    {order.PaymentService?.PaymentType.name}
                  </h1>
                  <h1 className="service">{order.PaymentService?.name}</h1>
                </div>
              </El.PaymentService>
            </El.Payment>
            <TransactionStatus status={order.transactionStatus} />
            <PaymentCode
              data={order.PaymentInfo}
              paymentServiceId={order.PaymentService.id}
            />
            <HowToPay paymentServiceId={order?.PaymentService?.id} />
          </div>
        </El.PaymentInfo>
      </El.Section>
    </El.Main>
  );
};

export default OrderPaymentInfo;
