import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import IconsControl from "../../../../IconsControl";
import Loading2 from "../../../../otherComps/Loading/Loading2";
import LoadingBookCover from "../../../../otherComps/Loading/LoadingBookCover";

export const Main = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: 0.4s all ease;
  background: ${({ theme }) => theme.content.bookCard.cover.background};
`;

const shimmer = keyframes`0%{
  background-position: -450px 0;
}
100%{
  background-position: 450px 0;
}
`;

export const LoadingWrapper = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.content.bookCard.cover.background};
  align-items: center;
  justify-content: center;
  z-index: 3;
`;
export const DefImg = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.content.bookCard.cover.background};
  z-index: 2;
  > svg {
    height: 40%;
    fill: ${({ theme }) => (theme.name === "light" ? "#adbdd3" : "#e8efff2e")};
  }
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
      {cover === defaultCover && <DefImg>{IconsControl("dapurkata")}</DefImg>}
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
