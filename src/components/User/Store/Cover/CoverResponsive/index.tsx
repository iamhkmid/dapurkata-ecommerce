import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import IconsControl from "../../../../IconsControl";
import LoadingBookCover from "../../../../otherComps/Loading/LoadingBookCover";

export const Main = styled.div`
  display: block;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: 0.4s all ease;
  background: ${({ theme }) => theme.content.bookCard.cover.background};
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
};

const Cover: FC<TBookCover> = ({ url }) => {
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
          layout="responsive"
          objectFit="fill"
          width={200}
          height={290}
          quality={75}
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

export default Cover;
