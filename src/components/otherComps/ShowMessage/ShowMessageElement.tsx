import styled, { css } from "styled-components";

type TMain = {
  isShowed: boolean;
  color: string;
};

export const Main = styled.div<TMain>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 100%;
  max-height: 0;
  padding: 0 1.5rem;
  overflow: hidden;

  ${({ isShowed }) =>
    isShowed &&
    css`
      margin-top: 0.5rem;
      overflow: visible;
      padding: 0.3rem 1.5rem;
      max-height: 3rem;
    `}
  ${({ theme, color }) => css`
    background: ${theme.button[color || "primary"].background};
    color: ${theme.button[color || "primary"].color};
    > svg {
      color: ${theme.button[color || "primary"].color};
    }
  `}
  transition: 0.4s all ease;
`;

export const Message = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-align: center;

  font-family: "Poppins", sans-serif;
  text-transform: capitalize;
  font-size: 0.9rem;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;
export const BtnWrapper = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  margin: 0.2rem;
  height: 2rem;
  aspect-ratio: 1/1;
  right: 0;
  :hover {
    background: ${({ theme }) => theme.button.hover.danger.background};
    color: ${({ theme }) => theme.button.hover.danger.color};
  }
  > svg {
    height: 1rem;
  }
  transition: 0.4s all ease;
`;
