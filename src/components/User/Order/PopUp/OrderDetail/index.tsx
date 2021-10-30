import { useQuery } from "@apollo/client";
import moment from "moment";
import { FC, useContext, useEffect, useRef } from "react";
import NumberFormat from "react-number-format";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import { ORDER_DETAIL } from "../../../../../graphql/transaction/queries";
import { TGQLOrderDetailQuery } from "../../../../../types/transaction";
import Button from "../../../../otherComps/Buttons/Button";
import PopUpHeader from "../../../../otherComps/PopUpHeader/PopUpHeaderUser";
import * as El from "./OrderDetailElement";

type TProps = {
  orderId: string;
};
const OrderDetail: FC<TProps> = ({ orderId }) => {
  const { userNav, dispatch } = useContext(UserNavCtx);
  const { data, loading, error } = useQuery<TGQLOrderDetailQuery>(
    ORDER_DETAIL,
    {
      fetchPolicy: "network-only",
      variables: { orderId },
    }
  );
  const getStatus = (stat: string) => {
    switch (stat.toLocaleLowerCase()) {
      case "pending":
        return "Menunggu Pembayaran";

      default:
        return "";
    }
  };

  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeader title="Pesanan" />
      {data?.order && (
        <El.Section>
          <div>
            {data.order.transactionStatus !== "expire" && (
              <El.ButtonWrapper>
                <Button
                  type="button"
                  name="Tampilkan Kode Pembayaran"
                  color="success"
                  onClick={() =>
                    dispatch({
                      type: "SHOW_POPUP",
                      value: { name: "ORDER_PAYMENT_INFO", orderId },
                    })
                  }
                />
              </El.ButtonWrapper>
            )}
            <El.OrderDetail>
              <h1 className="title">DETAIL PEMESANAN</h1>
              <div className="info-wrapper">
                <div className="val-wrapper">
                  <h1 className="name">Total Pembayaran</h1>
                  <h1 className="gross-amount">
                    <NumberFormat
                      prefix="Rp"
                      suffix=",00"
                      value={data.order.grossAmount}
                      displayType={"text"}
                      thousandSeparator={"."}
                      decimalSeparator={","}
                    />
                  </h1>
                </div>
                <div className="val-wrapper">
                  <div className="name">Currency</div>
                  <div className="value">{data.order.currency}</div>
                </div>
                <div className="val-wrapper">
                  <div className="name">Status Pembayaran</div>
                  <div className="value">
                    {getStatus(data.order.transactionStatus)}
                  </div>
                </div>
                <div className="val-wrapper">
                  <div className="name">Waktu Transaksi</div>
                  <div className="value">
                    {moment(data.order.transactionTime)
                      .locale("id")
                      .format("dddd, DD MMMM YYYY | HH:mm")}
                  </div>
                </div>
                <div className="val-wrapper">
                  <div className="name">Batas Waktu Pembayaran</div>
                  <div className="value">
                    {moment(data.order.expirationTime)
                      .locale("id")
                      .format("dddd, DD MMMM YYYY | HH:mm")}
                  </div>
                </div>
              </div>
            </El.OrderDetail>
            <El.ItemDetail>
              <h1 className="title">ITEM</h1>
              <div className="val-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama</th>
                      <th>Harga</th>
                      <th>Jumlah</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.order.ItemDetails.map((val, index) => {
                      return (
                        <tr key={val.id}>
                          <td>{index + 1}</td>
                          <td>
                            <div className="name">{val.name}</div>
                          </td>
                          <td>
                            <NumberFormat
                              prefix="Rp"
                              suffix=",00"
                              value={val.price}
                              displayType={"text"}
                              thousandSeparator={"."}
                              decimalSeparator={","}
                            />
                          </td>
                          <td>{val.quantity}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </El.ItemDetail>
            <El.Recipient>
              <h1 className="title">PENERIMA</h1>
              <div className="info-wrapper">
                <div className="val-wrapper">
                  <div className="name">Nama Depan</div>
                  <div className="value">
                    {data.order.CustomerDetails.ShippingAddress.firstName}
                  </div>
                </div>
                <div className="val-wrapper">
                  <div className="name">Nama Belakang</div>
                  <div className="value">
                    {data.order.CustomerDetails.ShippingAddress.lastName || ""}
                  </div>
                </div>
                <div className="val-wrapper">
                  <div className="name">Email</div>
                  <div className="value">
                    {data.order.CustomerDetails.ShippingAddress.email}
                  </div>
                </div>
                <div className="val-wrapper">
                  <div className="name">Phone</div>
                  <div className="value">
                    {data.order.CustomerDetails.ShippingAddress.phone}
                  </div>
                </div>
                <div className="val-wrapper">
                  <div className="name">Kota/Kabupaten</div>
                  <div className="value">
                    {data.order.CustomerDetails.ShippingAddress.city}
                  </div>
                </div>
                <div className="val-wrapper">
                  <div className="name">Alamat</div>
                  <div className="value">
                    {data.order.CustomerDetails.ShippingAddress.address}
                  </div>
                </div>
              </div>
            </El.Recipient>
          </div>
        </El.Section>
      )}
    </El.Main>
  );
};

export default OrderDetail;
