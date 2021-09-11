import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import BookCover from "../../../otherComps/BookCard/BookCover";
import Button from "../../../otherComps/Buttons/Button";
import DeleteCart from "../DeleteCart";
import UpdateCartInput from "../UpdateCartInput";
import * as El from "./CartListElement";

const CartList = () => {
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const [amountPrice, setAmountPrice] = useState(0);
  const { dispatch } = useContext(UserNavCtx);
  const { push } = useRouter();
  useEffect(() => {
    const amount = shoppingCart.data.reduce(
      (acc, curr) => acc + curr.Book.price * curr.amount,
      0
    );
    setAmountPrice(amount);
  }, [shoppingCart]);
  return (
    <El.Main>
      {shoppingCart.data.length === 0 && (
        <El.EmptyCart>Keranjang Kosong</El.EmptyCart>
      )}
      {shoppingCart.data.length > 0 && (
        <div>
          <El.list>
            <El.TableInfo>
              <thead>
                <tr>
                  <th>Produk</th>
                  <th>Harga</th>
                  <th>Jumlah</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {shoppingCart.data.map((val) => {
                  const cover = val.Book.BookPicture.filter(
                    (img) => img.type === "COVER"
                  );
                  return (
                    <tr key={val.id}>
                      <td>
                        <El.Product>
                          <El.CoverWrapper>
                            <div>
                              <BookCover
                                url={cover.length > 0 && cover[0].url}
                                quality={75}
                                height={75}
                                width={50}
                              />
                            </div>
                          </El.CoverWrapper>
                          <El.Info>
                            <h1>{val.Book.title}</h1>
                            <h1>{val.Book.Author.name}</h1>
                          </El.Info>
                        </El.Product>
                      </td>
                      <td>
                        <El.Price>
                          <NumberFormat
                            value={val.Book.price}
                            displayType={"text"}
                            thousandSeparator={"."}
                            decimalSeparator={","}
                          />
                        </El.Price>
                      </td>
                      <td>
                        <UpdateCartInput
                          cartProps={{
                            cartId: val.id,
                            amount: val.amount,
                          }}
                        />
                      </td>
                      <td>
                        <DeleteCart cartId={val.id} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </El.TableInfo>
          </El.list>
          <El.Footer>
            <El.AmountPrice>
              <h1>Total Harga</h1>
              <h1>
                {`Rp `}
                <NumberFormat
                  value={amountPrice}
                  displayType={"text"}
                  thousandSeparator={"."}
                  decimalSeparator={","}
                />
              </h1>
            </El.AmountPrice>
            <El.BtnWrapper>
              <Button
                name="PESAN"
                type="button"
                onClick={() => {
                  push({
                    pathname: "/u/order",
                    query: { type: "shoppingcart" },
                  });
                  dispatch({ type: "CLOSE_MENU" });
                }}
              />
            </El.BtnWrapper>
          </El.Footer>
        </div>
      )}
    </El.Main>
  );
};

export default CartList;
