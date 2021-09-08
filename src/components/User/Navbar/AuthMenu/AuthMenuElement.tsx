import styled, { css, keyframes } from "styled-components";
import NextLink from "next/link";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  margin-left: 1rem;
  height: 100%;
  display: flex;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  align-items: center;
  color: ${({ theme }) => theme.section.color};
  cursor: default;
  position: relative;
`;

export const NLink = styled(NextLink)`
  height: 100%;
`;

type TAnchor = {
  active: boolean;
};
export const Anchor = styled.a<TAnchor>`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0 0.5rem;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.section.color};
  border-bottom: 3px solid transparent;
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

export const MenuIconWrapper = styled.div`
  display: flex;
  align-items: center;
  > svg {
    height: 1rem;
    stroke-width: 2.5px;
  }
`;
export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.section.borderRadius};
  overflow: hidden;
  background: ${({ theme }) => theme.body.background};
  border: 1px solid ${({ theme }) => theme.section.border};
  width: 2.5rem;
  height: 2.5rem;
  position: relative;
  transition: 0.4s all ease;
`;

type TAccountBtn = {
  active: boolean;
};
export const AccountBtn = styled.div<TAccountBtn>`
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  align-items: center;
  height: 100%;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.section.color};
  :hover {
    color: ${({ theme }) => theme.navbar.menu.active.color};
    .profile {
      border: 1px solid ${({ theme }) => theme.navbar.menu.active.color};
    }
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.navbar.menu.active.color};
      .profile {
        border: 1px solid ${({ theme }) => theme.navbar.menu.active.color};
      }
    `}
  transition: 0.4s all ease;
`;

export const AuthMenuContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
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
