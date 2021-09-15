import styled, { css } from "styled-components";

export const Main = styled.div`
  display: none;
  height: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;
type TMobileIcon = {
  active: boolean;
};
export const MobileIcon = styled.div<TMobileIcon>`
  cursor: pointer;
  border-radius: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.button.list.background};
  color: ${({ theme }) => theme.button.section.color};
  :hover {
    background: ${({ theme }) => theme.button.hover.list.background};
    color: ${({ theme }) => theme.button.hover.list.color};
  }

  > svg {
    padding: 0.4rem;
    height: 2.2rem;
  }

  ${({ active }) =>
    active &&
    css`
      box-shadow: ${({ theme }) => theme.button.focus.list.boxShadow};
      background: ${({ theme }) => theme.button.hover.section.background};
      color: ${({ theme }) => theme.button.hover.section.color};
    `}

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > svg {
      height: 2rem;
    }
  }
  transition: 0.4s all ease;
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
  padding: 0.4rem;
  cursor: pointer;
  position: relative;
  color: ${({ theme }) => theme.color[1]};
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.button.primary.background};
    `}
  :hover {
    color: ${({ theme }) => theme.navbar.menu.active.color};
  }

  > svg {
    height: 1.5rem;
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
  color: ${({ theme }) => theme.button.primary.color};
  background: ${({ theme }) => theme.button.primary.background};
`;
