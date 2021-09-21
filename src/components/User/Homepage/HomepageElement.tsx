import styled, { css } from "styled-components";
import home_light from "../../../img/home_light.svg";
import home_dark from "../../../img/home_dark.svg";

type TSection = {
  currTheme: string;
};
export const Main = styled.main<TSection>`
  font-family: "Poppins", sans-serif;
  height: 100vh;
  ${({ currTheme }) =>
    currTheme === "light"
      ? css`
          background-image: url(${home_light});
        `
      : css`
          background-image: url(${home_dark});
        `};
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    backdrop-filter: blur(2px);
  }
`;

export const Section = styled.div`
  display: grid;
  position: relative;
  color: ${({ theme }) => theme.color[2]};
  grid-template-columns: 1.3fr 1fr;
  gap: 2rem;
  align-items: center;
  padding: calc(7vw + 4em) calc(13vw - 2em) 0 calc(13vw - 2em);
  @media screen and (max-width: 1170px) {
    grid-template-columns: none;
    grid-template-rows: 1.3fr 1fr;
    gap: 1rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 0.5rem;
  }
  transition: 0.4s all ease;
`;

export const GroupText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text1 = styled.h1`
  font-size: 1.5rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 1rem;
  }
`;
export const Text2 = styled.h1`
  font-size: 2.5rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 2.2rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 1.5rem;
  }
`;
export const Text3 = styled.h1`
  font-size: 1.2rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 1rem;
  }
  text-align: justify;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.9rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
`;
