import styled, { css } from "styled-components";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.4s all ease;
`;

export const Title = styled.h1`
  font-size: 1rem;
  height: 100%;
  padding: 0.2rem 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color[1]};
  transition: 0.4s all ease;
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  border-radius: 100%;
  margin: 0.2rem 0.4rem;
  border: none;
  outline: none;
  cursor: pointer;
  > svg {
    height: 1rem;
  }
  background: transparent;
  color: ${({ theme }) => theme.button.base.color};
  :hover {
    background: ${({ theme }) => theme.button.hover.danger.background};
    color: ${({ theme }) => theme.button.hover.danger.color};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > svg {
      height: 0.9rem;
    }
  }
  transition: 0.4s all ease;
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 0.5rem;
  width: max-content;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;
type TSidebarButton = {
  withSidebar: boolean;
};
export const IconWrapper = styled.div<TSidebarButton>`
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  justify-content: center;
  height: 2rem;
  aspect-ratio: 1/1;
  cursor: pointer;
  border: none;
  color: ${({ theme }) => theme.button.base.color};
  > svg {
    height: 1.5rem;
  }
  ${({ withSidebar }) =>
    !withSidebar
      ? css`
          transform: rotate(0);
        `
      : css`
          transform: rotate(180deg);
        `}

  :hover {
    background: ${({ theme }) => theme.button.hover.base.background};
    color: ${({ theme }) => theme.button.hover.base.color};
  }
  transition: 0.4s all ease;
`;
export const Left = styled.div`
  display: flex;
`;
