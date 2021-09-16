import { TGQLAuthor } from "./author";
import { TGQLCategory } from "./category";
import { TGQLBookPic } from "./picture";

export type TGQLBook = {
  id: string;
  title: string;
  description: string;
  edition: string;
  series: string;
  releaseYear: string;
  numberOfPages: number;
  height: number;
  weight: number;
  stock: number;
  price: number;
  rating: string;
  imgDir: string;
  authorId: string;
  Category?: TGQLCategory[];
  Author?: TGQLAuthor;
  BookPicture?: TGQLBookPic[];
  createdAt: Date;
  updatedAt: Date;
};

export type TArgsCreateBook = {
  data: {
    title: string;
    description: string;
    edition: string;
    series: string;
    releaseYear: string;
    numberOfPages: number;
    height: number;
    weight: number;
    stock: number;
    price: number;
    rating: string;
    Author: { id: string };
    Category: { id: string }[];
  };
  cover?: any;
  bookPics?: any[];
};

type TDBCreateBook = {
  title: string;
  description: string;
  edition: string;
  series: string;
  releaseYear: string;
  numberOfPages: number;
  height: number;
  weight: number;
  stock: number;
  price: number;
  rating: string;
  imgDir: string;
  Author: { connect: { id: string } };
  Category: { connect: { id: string }[] };
  BookPicture?: { create: { type: string; url: string }[] };
};

export type TDBUpdateBook = {
  title: string;
  description: string;
  edition: string;
  series: string;
  releaseYear: string;
  numberOfPages: number;
  height: number;
  weight: number;
  stock: number;
  price: number;
  rating: string;
  imgDir?: string;
  Category: { set: { id: string }[] };
  Author: { connect: { id: string } };
};

export type TArgsUpdateBook = {
  data: {
    bookId: string;
    title: string;
    description: string;
    edition: string;
    series: string;
    releaseYear: string;
    numberOfPages: number;
    height: number;
    weight: number;
    stock: number;
    price: number;
    rating: string;
    imgDir: string;
    Author: { id: string };
    Category: { id: string }[];
  };
};
