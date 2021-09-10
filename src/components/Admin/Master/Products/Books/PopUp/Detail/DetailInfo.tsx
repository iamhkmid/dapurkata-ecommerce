import Moment from "moment";
import { TGetBook } from "../../../../../../../types/book";
import * as El from "./DetailInfoElement";
import Image from "next/image";
import { useState } from "react";
import BookCover from "../../../../../../otherComps/BookCard/BookCover";

const DetailInfo = ({ data }: { data: TGetBook }) => {
  const coverData = data.BookPicture.filter((img) => img.type === "COVER");
  return (
    <El.Container>
      <El.Section>
        <El.CoverWrapper>
          <BookCover
            url={coverData.length > 0 && coverData[0].url}
            quality={75}
            height={240}
            width={160}
          />
        </El.CoverWrapper>
      </El.Section>

      <El.Section>
        <El.TextWrapper>
          <El.Label>id</El.Label>
          <El.Value>{data.id}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Title</El.Label>
          <El.Value>{data.title}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Author</El.Label>
          <El.Value>{data.Author.name}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Synopsis</El.Label>
          <El.Value>{data.synopsis}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Edition</El.Label>
          <El.Value>{data.edition}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Price</El.Label>
          <El.Value>{data.price}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Series</El.Label>
          <El.Value>{data.series}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Release Year</El.Label>
          <El.Value>{data.releaseYear}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Number Of Pages</El.Label>
          <El.Value>{data.numberOfPages}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Book Height</El.Label>
          <El.Value>{data.height}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Book Weight</El.Label>
          <El.Value>{data.weight}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Stock</El.Label>
          <El.Value>{data.stock}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Rating</El.Label>
          <El.Value>{data.rating}</El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Kategori </El.Label>
          <El.CategoryWrapper>
            {data.Category.map((value) => (
              <El.Category key={value.name}>{value.name}</El.Category>
            ))}
          </El.CategoryWrapper>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Update At</El.Label>
          <El.Value>
            {Moment(data.updatedAt).local().format("DD-MM-YYYY hh:mm a")}
          </El.Value>
        </El.TextWrapper>
        <El.TextWrapper>
          <El.Label>Create At</El.Label>
          <El.Value>
            {Moment(data.createdAt).local().format("DD-MM-YYYY hh:mm a")}
          </El.Value>
        </El.TextWrapper>
      </El.Section>
    </El.Container>
  );
};

export default DetailInfo;
