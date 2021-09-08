export type TCart = {
  id: string;
  Book: {
    id: string;
    title: string;
    price: number;
    weight: number;
    Author: {
      name: string;
    };
    BookPicture: {
      url: string;
      type: string;
    }[];
  };
  amount: number;
};

export type TGQLShoppingCart = { shoppingCart: TCart[] };
export type TGQLCreateShoppingCart = { createShoppingCart: TCart };
export type TGQLUpdateShoppingCart = { updateShoppingCart: TCart };
export type TGQLDeleteShoppingCart = { deletehoppingCart: TCart };
