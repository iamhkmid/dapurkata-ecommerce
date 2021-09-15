import styled, { css, keyframes } from "styled-components";
import NextLink from "next/link";

export const Main = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    display: none;
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0 0.5rem;
  height: 100%;
  transition: 0.4s all ease;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  align-items: center;
  position: relative;
`;

export const NLink = styled(NextLink)`
  height: 100%;
`;
type TAnchor = {
  active: boolean;
};
export const Anchor = styled.a<TAnchor>`
  display: flex;
  position: relative;
  font-size: 0.9rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color[1]};
  :hover {
    .active-line {
      background: ${({ theme }) => theme.button.hover.primary.background};
    }
    color: ${({ theme }) => theme.button.hover.primary.background};
  }
  ${({ active }) =>
    active &&
    css`
      .active-line {
        background: ${({ theme }) => theme.button.primary.background};
        width: 1.5rem;
      }
      color: ${({ theme }) => theme.navbar.menu.active.color};
    `}
  transition: 0.4s all ease;
`;
type TDropdownBtn = {
  active: boolean;
};
export const DropdownBtn = styled.div<TDropdownBtn>`
  cursor: pointer;
  position: relative;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  align-items: center;
  height: 100%;
  width: 100%;
  border: none;
  padding: 0 0.5rem;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.color[1]};
  :hover {
    .active-line {
      background: ${({ theme }) => theme.button.hover.primary.background};
    }
    color: ${({ theme }) => theme.button.hover.primary.background};
  }
  ${({ active }) =>
    active &&
    css`
      .active-line {
        background: ${({ theme }) => theme.button.primary.background};
        width: 1.3rem;
      }
      color: ${({ theme }) => theme.navbar.menu.active.color};
    `}
  transition: 0.4s all ease;
`;
export const DropdownName = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem 0 1rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 1rem;
  height: 100%;
  > svg {
    height: 1rem;
    stroke-width: 2.5px;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  height: 100%;
  margin: 0 1rem;
  height: 100%;
`;

type TIconButton = {
  active: boolean;
};
export const IconButton = styled.div<TIconButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  height: 100%;
  padding: 0.5rem;
  cursor: pointer;
  position: relative;
  background: none;
  fill: ${({ theme }) => theme.navbar.menu.fill};
  color: ${({ theme }) => theme.color[1]};
  :hover {
    fill: ${({ theme }) => theme.navbar.menu.hover.fill};
    color: ${({ theme }) => theme.navbar.menu.active.color};
  }
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.button.primary.background};
    `}
  > svg {
    height: 1.3rem;
  }

  transition: 0.4s all ease;
`;

export const AmountNum = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15%;
  right: -5%;
  border-radius: 100%;
  padding: 0 0.2rem;
  height: 1rem;
  aspect-ratio: 1/1;
  background: ${({ theme }) => theme.button.primary.background};
  color: ${({ theme }) => theme.button.primary.color};
`;

export const ActiveLine = styled.div`
  display: flex;
  top: 75%;
  border-radius: 1rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  width: 0;
  background: ${({ theme }) => theme.button.hover.primary.background};
  aspect-ratio: 6/1;
  transition: 0.4s all ease;
`;
