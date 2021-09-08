import { motion } from "framer-motion";
import NextLink from "next/link";
import styled, { css } from "styled-components";

type TMain = {
  active: boolean;
};

export const Main = styled.div<TMain>`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  cursor: default;
  position: relative;
  max-height: 0;
  width: 100%;
  padding-bottom: 0.3rem;
  ${({ active }) =>
    active &&
    css`
      max-height: 15rem;
    `}
  transition: 0.4s all ease;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  padding: 0 1rem;
  height: 100%;
  width: 100%;
`;

export const Li = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.section.borderRadius};
  overflow: hidden;
  text-align: start;

  transition: 0.4s all ease;
`;

export const NLink = styled(NextLink)`
  height: 100%;
  width: 100%;
`;
export const Anchor = styled.a`
  font-size: 0.8rem;
  font-weight: 400;
  padding: 0.5rem;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.section.color};
  :hover {
    color: ${({ theme }) => theme.button.hover.list.color};
    background: ${({ theme }) => theme.button.hover.list.background};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;
