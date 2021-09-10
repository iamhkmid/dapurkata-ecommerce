import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Loading2 from "../../Loading/Loading2";
import LoadingBookCover from "../../Loading/LoadingBookCover";

export const Main = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: 0.4s all ease;
  background: ${({ theme }) => theme.content.bookCard.noImage.background};
  color: ${({ theme }) => theme.content.bookCard.noImage.color};
`;

export const LoadingWrapper = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

type TBookCover = {
  url: string;
  quality: number;
  height: number;
  width: number;
};

const BookCover: FC<TBookCover> = ({ url, quality, height, width }) => {
  const defaultCover = "/uploads/books/default.svg";
  const [cover, setCover] = useState<string>(defaultCover);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const defaultImgSrc = () => {
    setCover(defaultCover);
  };

  useEffect(() => {
    if (url) {
      setCover(url);
    }
  }, [url]);
  return (
    <Main>
      {cover && (
        <Image
          src={`${process.env.NEXT_PUBLIC_GQL_HTTP_URL}${cover}`}
          alt="Cover"
          layout="fixed"
          width={width}
          height={height}
          quality={quality}
          onLoad={() => setIsLoading(false)}
          onError={() => defaultImgSrc()}
        />
      )}
      {cover && isLoading && (
        <LoadingWrapper>
          <LoadingBookCover />
        </LoadingWrapper>
      )}
    </Main>
  );
};

export default BookCover;
