import { FC, useEffect, useState } from "react";
import styled, { css } from "styled-components";

type TMessage = {
  isShowed: boolean;
  color: string;
};

export const Message = styled.label<TMessage>`
  font-size: 0.8rem;
  max-height: 0;
  overflow: hidden;

  ${({ isShowed }) =>
    isShowed &&
    css`
      overflow: visible;
      max-height: 1rem;
    `}
  ${({ theme, color }) => css`
    color: ${theme.button[color || "primary"].background};
    > svg {
      color: ${theme.button[color || "primary"].background};
    }
  `}

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;

type TProps = { message: string; color: string };
const TextError: FC<TProps> = ({ message, color }) => {
  return (
    <Message isShowed={!!message} color={color}>
      {message}
    </Message>
  );
};
export default TextError;
