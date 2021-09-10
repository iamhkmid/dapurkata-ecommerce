import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { OrderCtx } from "../../../../contexts/OrderCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { ORDER } from "../../../../graphql/transaction/mutations";
import BookCover from "../../../otherComps/BookCard/BookCover";
import Button from "../../../otherComps/Buttons/Button";
import Loading from "./Loading";
import * as El from "./OrderSummaryElement";
import { useGQLOrder } from "./useGQL";

const OrderSummary = () => {
  const { order } = useContext(OrderCtx);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const [amountPrice, setAmountPrice] = useState(0);
  const isBuyNow =
    order.order.type === "buy-now" &&
    !!order.order.book &&
    !!order.order.amount;
  const isSCart =
    order.order.type === "shoppingcart" && shoppingCart.data.length > 0;

  const { makeAnOrder, data, error, loading } = useGQLOrder();
  const orderHandler = () => {
    makeAnOrder({
      orderType: order.order.type,
      recipientId: order.recipient.data.recipient.id,
      bookId: order.order.type === "buy-now" ? order.order.book.id : undefined,
      amount: order.order.type === "buy-now" ? order.order.amount : undefined,
      courierCode: order.courier.selected.code,
      courierService: order.courier.selected.courier.service,
      payment: order.payment.selected.paymentServiceId,
    });
  };

  useEffect(() => {
    if (order.order.type === "buy-now" && !!order.order.book) {
      setAmountPrice(order.order.book.price * order.order.amount);
    } else {
      const amount = shoppingCart.data.reduce(
        (acc, curr) => acc + curr.Book.price * curr.amount,
        0
      );
      setAmountPrice(amount);
    }
  }, [
    shoppingCart.data,
    order.order.type,
    order.order.type === "buy-now" && order.order.book,
  ]);

  useEffect(() => {
    if (data) console.log(data);
    if (error) console.log(error);
  }, [data, error]);
  return (
    <El.Main>
      {!isBuyNow && !isSCart && <El.EmptyCart>Keranjang Kosong</El.EmptyCart>}
      {(isBuyNow || isSCart) && (
        <>
          <El.Detail>
            {order.order.type === "buy-now" && (
              <El.TableWrapper>
                <El.TableName>ITEM</El.TableName>
                <El.CartInfo>
                  <El.ItemWrapper>
                    <El.CoverWrapper>
                      <BookCover
                        url={
                          order.order.book?.BookPicture.find(
                            (img) => img.type === "COVER"
                          )?.url
                        }
                        quality={75}
                        height={55}
                        width={37}
                      />
                    </El.CoverWrapper>
                    <El.InfoWrapper>
                      <El.Info>
                        <h1>{order.order.book?.title}</h1>
                        <h1>{order.order.book?.Author.name}</h1>
                      </El.Info>{" "}
                      <El.Info2>
                        <h1>
                          {`Rp `}
                          <NumberFormat
                            value={order.order.book?.price}
                            displayType={"text"}
                            thousandSeparator={"."}
                            decimalSeparator={","}
                          />
                        </h1>
                        <h1>{`x ${order.order?.amount}`}</h1>
                      </El.Info2>
                    </El.InfoWrapper>
                  </El.ItemWrapper>
                </El.CartInfo>
              </El.TableWrapper>
            )}
            {order.order.type === "shoppingcart" && (
              <El.TableWrapper>
                <El.TableName>KERANJANG</El.TableName>
                <El.CartInfo>
                  {shoppingCart.data.map((val, i) => {
                    const cover = val.Book.BookPicture.filter(
                      (img) => img.type === "COVER"
                    );
                    return (
                      <El.ItemWrapper key={val.id}>
                        <El.CoverWrapper>
                          <BookCover
                            url={cover.length > 0 && cover[0].url}
                            quality={75}
                            height={55}
                            width={37}
                          />
                        </El.CoverWrapper>
                        <El.InfoWrapper>
                          <El.Info>
                            <h1>{val.Book.title}</h1>
                            <h1>{val.Book.Author.name}</h1>
                          </El.Info>{" "}
                          <El.Info2>
                            <h1>
                              {`Rp `}
                              <NumberFormat
                                value={val.Book.price}
                                displayType={"text"}
                                thousandSeparator={"."}
                                decimalSeparator={","}
                              />
                            </h1>
                            <h1>{`x ${val.amount}`}</h1>
                          </El.Info2>
                        </El.InfoWrapper>
                      </El.ItemWrapper>
                    );
                  })}
                </El.CartInfo>
              </El.TableWrapper>
            )}
            <El.OrderInfo>
              <El.TableInfo>
                <tbody>
                  <tr>
                    <td colSpan={2} className="title">
                      PENERIMA
                    </td>
                  </tr>
                  <tr>
                    <td>Nama</td>
                    <td>{`${order.recipient.data.recipient?.firstName} ${
                      order.recipient.data.recipient?.lastName || ""
                    }`}</td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>{order.recipient.data.recipient?.email}</td>
                  </tr>
                  <tr>
                    <td>Phone</td>
                    <td>{order.recipient.data.recipient?.phone}</td>
                  </tr>
                  <tr>
                    <td>Provinsi</td>
                    <td>{order.recipient.data.recipient?.provinceName}</td>
                  </tr>
                  <tr>
                    <td>Kota</td>
                    <td>{order.recipient.data.recipient?.cityName}</td>
                  </tr>
                  <tr>
                    <td>Kode Pos</td>
                    <td>{order.recipient.data.recipient?.postalCode}</td>
                  </tr>
                  <tr>
                    <td>Alamat Lengkap</td>
                    <td>{order.recipient.data.recipient?.address}</td>
                  </tr>
                </tbody>
              </El.TableInfo>
              <El.TableInfo>
                <tbody>
                  <tr>
                    <td colSpan={2} className="title">
                      KURIR
                    </td>
                  </tr>
                  <tr>
                    <td>Nama</td>
                    <td>{order.courier.selected.courier?.name}</td>
                  </tr>
                  <tr>
                    <td>Layanan</td>
                    <td>{order.courier.selected.courier?.service}</td>
                  </tr>
                  <tr>
                    <td>ETD</td>
                    <td>{order.courier.selected.courier?.etd}</td>
                  </tr>
                  <tr>
                    <td>Deskripsi</td>
                    <td>{order.courier.selected.courier?.description}</td>
                  </tr>
                </tbody>
              </El.TableInfo>
              <El.TableInfo>
                <tbody>
                  <tr>
                    <td colSpan={2} className="title">
                      PEMBAYARAN
                    </td>
                  </tr>
                  <tr>
                    <td>Tipe</td>
                    <td>
                      {
                        order.payment.data.paymentTypes.find(
                          (val) =>
                            val.id === order.payment.selected.paymentTypeId
                        )?.name
                      }
                    </td>
                  </tr>
                  <tr>
                    <td>Layanan</td>
                    <td>
                      {
                        order.payment.data.paymentServices.find(
                          (val) =>
                            val.id === order.payment.selected.paymentServiceId
                        )?.name
                      }
                    </td>
                  </tr>
                </tbody>
              </El.TableInfo>
            </El.OrderInfo>
            {order.courier.loading && <Loading />}
            {!order.courier.loading && (
              <El.TableInfo>
                <tbody>
                  <tr>
                    <td>Subtotal</td>
                    <td>
                      {`Rp `}
                      <NumberFormat
                        value={amountPrice}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Biaya Kirim</td>
                    <td>
                      {`Rp `}
                      <NumberFormat
                        value={order.courier.selected.courier?.cost || 0}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <El.TotalName>Total</El.TotalName>
                    </td>
                    <td>
                      <El.TotalValue>
                        {`Rp `}
                        <NumberFormat
                          value={
                            amountPrice +
                              order.courier.selected.courier?.cost || 0
                          }
                          displayType={"text"}
                          thousandSeparator={"."}
                          decimalSeparator={","}
                        />
                      </El.TotalValue>
                    </td>
                  </tr>
                </tbody>
              </El.TableInfo>
            )}
            <El.ButtonWrapper>
              <Button
                name="CHECKOUT"
                type="button"
                isLoading={loading}
                onClick={() => orderHandler()}
                disabled={!order.payment.selected.paymentServiceId}
              />
            </El.ButtonWrapper>
          </El.Detail>
        </>
      )}
    </El.Main>
  );
};

export default OrderSummary;
