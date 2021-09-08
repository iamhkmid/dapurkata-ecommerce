import styled, { css } from "styled-components";
import { motion } from "framer-motion";

type TMain = {
  active: boolean;
};
export const Main = styled.div<TMain>`
  display: flex;
  flex-direction: column;
  max-height: 0;
  width: 100%;
  margin-left: 2.5rem;
  overflow: hidden;
  ${({ active }) =>
    active &&
    css`
      margin-top: 0.2rem;
      max-height: 15rem;
    `}
  transition: 0.4s all ease;
`;
type TItem = {
  active: boolean;
};
export const Item = styled.div<TItem>`
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 1rem;
  margin: 0.1rem 0;
  min-height: 1.8rem;
  width: 100%;
  color: ${({ theme }) => theme.section.color};
  ::before {
    content: "";
    position: absolute;
    height: 5px;
    aspect-ratio: 1/1;
    transform: rotate(-180deg);
    border: 1px solid transparent;
    left: 0.1rem;
    background: transparent;
  }
  ${({ active }) =>
    active &&
    css`
      ::before {
        transform: rotate(0);
        border-color: ${({ theme }) => theme.button.focus.sidebar.color};
        transition: 1s all ease;
      }
      color: ${({ theme }) => theme.button.focus.sidebar.color};
      font-weight: 500;
    `}
  :hover {
    color: ${({ theme }) => theme.button.focus.sidebar.color};
  }
  transition: 0.4s all ease;
`;

export const Text = styled.h1``;
