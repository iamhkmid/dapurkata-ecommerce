import * as El from "./RadioButtonElement";
import { useContext, useEffect, useRef } from "react";
import { OrderCtx } from "../../../../../../contexts/OrderCtx";
import { useState } from "react";
import Loading from "./Loading";
import Image from "next/image";
import { useWindowSize } from "react-use";

type TImgSize = { h: number; w: number };

const RadioButton = () => {
  const { order, dispatch } = useContext(OrderCtx);
  const { loading, error } = order.payment;
  const initialImgSize = { h: 40, w: 120 };
  const [imgSize, setImgSize] = useState<TImgSize>(initialImgSize);
  const { width } = useWindowSize();
  useEffect(() => {
    width > 540 && setImgSize(initialImgSize);
    width <= 540 && setImgSize({ h: 30, w: 90 });
  }, [width]);
  type TCS = { id: string };
  const changeSelected = ({ id }: TCS) => {
    dispatch({ type: "SET_PAYMENT_SERVICE_ID", value: id });
  };
  useEffect(() => {
    const paymentServices = order.payment.data.paymentServices;
    const paymentServiceId = order.payment.selected.paymentServiceId;

    if (paymentServices.length > 0 && !paymentServiceId) {
      dispatch({
        type: "SET_PAYMENT_SERVICE_ID",
        value: paymentServices[0].id,
      });
    } else if (!!paymentServiceId) {
    }
  }, [
    order.payment.data.paymentServices,
    order.payment.selected.paymentServiceId,
  ]);

  return (
    <El.Main>
      {loading && <Loading />}
      {!loading &&
        !order.payment.error &&
        order.payment.data.paymentServices?.map((val) => (
          <El.InputRadio
            key={val.id}
            isSelected={order.payment.selected.paymentServiceId === val.id}
            onClick={() => changeSelected({ id: val.id })}
          >
            <El.Detail>
              <Image
                src={`${process.env.NEXT_PUBLIC_GQL_HTTP_URL}${val.iconURL}`}
                height={imgSize.h}
                width={imgSize.w}
                alt={val.name}
                layout="fixed"
              />
            </El.Detail>
          </El.InputRadio>
        ))}
    </El.Main>
  );
};

export default RadioButton;
