import moment from "moment";
import "moment/locale/id";
import NumberFormat from "react-number-format";
import * as El from "./OrdersElement";
import { useGQLOrders } from "./useGQL";

const Orders = () => {
  const { data, error, loading } = useGQLOrders();
  return (
    <El.Main>
      <El.Section>
        <El.TableOrders>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Total Bayar</th>
              <th>Pembayaran</th>
              <th>Status</th>
              <th>Waktu Transaksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((val) => {
              return (
                <tr key={val.id}>
                  <td>
                    <El.OrderId>{val.id}</El.OrderId>
                  </td>
                  <td>
                    <El.GrossAmount>
                      {`${val.currency} `}
                      <NumberFormat
                        value={val.grossAmount}
                        displayType={"text"}
                        thousandSeparator={"."}
                        decimalSeparator={","}
                      />
                    </El.GrossAmount>
                  </td>
                  <td>
                    <El.Payment>
                      <div>{val.PaymentService?.PaymentType?.name}</div>
                      <div>{val.PaymentService?.name}</div>
                    </El.Payment>
                  </td>
                  <td>
                    <El.TransactionStatus status={val.transactionStatus}>
                      {val.transactionStatus[0].toUpperCase() +
                        val.transactionStatus.slice(1).toLowerCase()}
                    </El.TransactionStatus>
                  </td>
                  <td>
                    <El.TransactionTime>
                      {moment(val.transactionTime)
                        .locale("id")
                        .format("dddd, DD MMMM YYYY | HH:mm")}
                    </El.TransactionTime>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </El.TableOrders>
      </El.Section>
    </El.Main>
  );
};

export default Orders;
