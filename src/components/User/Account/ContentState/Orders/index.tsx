import * as El from "./OrdersElement";

const Orders = () => {
  return (
    <El.Main>
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
          {["1", "2"].map((val) => {
            return (
              <tr key={val}>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </El.TableOrders>
    </El.Main>
  );
};

export default Orders;
