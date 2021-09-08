import { ApolloError } from "apollo-server-express";
import cuid from "cuid";
import {
  TBuyNowItems,
  TbuyNowItemsWeight,
  TItemDetails,
  TPropsCCost,
  TPropsSCWeight,
  TSCartItems,
} from "../../../types/transaction";

export const courierCost = async (props: TPropsCCost) => {
  const { api, courier, destination, service, weight } = props;
  const costs = await api.rajaOngkir.getCost({
    origin: process.env.ORIGIN_CITY_ID,
    courier,
    destination,
    weight,
  });
  const cost = costs.costs.find((val) => val.service === service);
  if (!cost) throw new ApolloError("Courier service not found");

  return cost.cost[0].value;
};

export const sCartWeight = (props: TPropsSCWeight) => {
  const { shoppingCart } = props;
  const maxWeight = Number(process.env.MAX_COURIER_WEIGHT);
  const cartWeight = shoppingCart.reduce(
    (acc, curr) => acc + curr.Book.weight * curr.amount,
    0
  );
  if (cartWeight > maxWeight)
    throw new ApolloError("Maksimal berat keranjang 30kg.");

  return cartWeight;
};

export const sCartItems: TSCartItems = (props) => {
  const { shoppingCart, courier } = props;
  const itemDetails = shoppingCart.reduce(
    (acc, curr) => [
      ...acc,
      {
        id: cuid(),
        itemId: curr.Book.id,
        name: curr.Book.title,
        price: curr.Book.price,
        quantity: curr.amount,
      },
    ],
    [] as TItemDetails[]
  );
  const gross_amount = shoppingCart.reduce(
    (acc, curr) => acc + curr.Book.price * curr.amount,
    0
  );

  return {
    item_details: [
      ...itemDetails,
      {
        id: cuid(),
        itemId: courier.code,
        name: `${courier.code} - ${courier.service}`,
        price: courier.cost,
        quantity: 1,
      },
    ],
    gross_amount: gross_amount + courier.cost,
  };
};

export const buyNowWeight = async (props: TbuyNowItemsWeight) => {
  const { book, amount } = props;
  const weight = book.weight * amount;
  const maxWeight = Number(process.env.MAX_COURIER_WEIGHT);
  if (weight > maxWeight)
    throw new ApolloError("Maksimal berat keranjang 30kg.");

  return weight;
};

export const buyNowItems: TBuyNowItems = (props) => {
  const { book, courier, amount } = props;

  const gross_amount = book.price * amount;

  return {
    item_details: [
      {
        id: cuid(),
        itemId: courier.code,
        name: `${courier.code} - ${courier.service}`,
        price: courier.cost,
        quantity: 1,
      },
      {
        id: cuid(),
        itemId: book.id,
        name: book.title,
        price: book.price,
        quantity: amount,
      },
    ],
    gross_amount: gross_amount + courier.cost,
  };
};
