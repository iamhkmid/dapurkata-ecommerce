export type TGQLWishlist = {
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  Book: {
    id: string;
    title: string;
    Author: {
      id: string;
      name: string;
    };
  }[];
};

export type TGQLAddWishlist = {
  message: string;
};

export type TGQLAddWishlist = {
  message: string;
};
export type TGQLDeleteWishlist = {
  message: string;
};
