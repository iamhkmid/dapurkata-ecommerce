import styled, { css } from "styled-components";

type TSection = {
  currTheme: string;
};
export const Main = styled.div<TSection>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

export const Section1 = styled.div`
  display: flex;
  background: ${({ theme }) => theme.background[2]};
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  gap: 3rem;
  width: 100%;
  overflow: hidden;
  padding-top: 6rem;
  padding-bottom: 3rem;
  /* ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    backdrop-filter: blur(1px);
  } */

  transition: 0.4s all ease;
`;

export const GroupText = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  flex-direction: column;
`;

export const Text1 = styled.h1`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color[1]};
  text-align: center;
  font-weight: 600;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 1.2rem;
  }
`;
export const Text2 = styled.h1`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color[1]};
  text-align: center;
  font-weight: 400;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 1rem;
  }
`;
export const Text3 = styled.h1`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.color[1]};

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.9rem;
  }
`;

export const ImageContainer = styled.div`
  display: block;
  align-items: center;
  position: relative;
  height: 300px;
  aspect-ratio: 5/3;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    height: 250px;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    height: 150px;
  }
`;

export const Background = styled.div`
  display: block;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;
  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2rem;
  > button {
    border-radius: 100px;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 1rem;
  }
`;

export const Section2 = styled.div`
  display: flex;
  background: ${({ theme }) => theme.background[1]};
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 3rem;
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 3rem;
  /* ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    backdrop-filter: blur(1px);
  } */

  transition: 0.4s all ease;
`;
