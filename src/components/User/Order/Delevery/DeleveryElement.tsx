import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
`;
type TContentName = {
  disabled: boolean;
};
export const ContentHeader = styled.div<TContentName>`
  display: flex;
  cursor: pointer;
  position: relative;
  height: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.border[2]};
  color: ${({ theme }) => theme.button.base.color};
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      color: ${({ theme }) => theme.input.disabled.color};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.9rem;
  }
  transition: 0.4s all ease;
`;
export const ContentTitle = styled.h1`
  font-size: 1rem;
  padding: 0.3rem 0.5rem;
`;
type TContentBody = {
  isShowed: boolean;
};
export const ContentBody = styled.div<TContentBody>`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  max-height: 0;
  overflow-y: scroll;
  ${({ isShowed }) =>
    isShowed &&
    css`
      max-height: 30rem;
    `}
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  transition: 0.4s all ease;
  transition-property: max-height, height;
`;

type TDropdownIconWrapper = {
  isShowed: boolean;
  disabled?: boolean;
};
export const DropdownIconWrapper = styled.div<TDropdownIconWrapper>`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0.5rem;
  height: 100%;
  color: ${({ theme }) => theme.input.dropdown.icon};
  > svg {
    height: 1.5rem;
    stroke-width: 40;
  }
  ${({ isShowed }) =>
    isShowed &&
    css`
      transform: rotate(180deg);
      color: ${({ theme }) => theme.input.focus.dropdown.icon};
    `}
  ${({ disabled }) =>
    disabled &&
    css`
      color: ${({ theme }) => theme.input.disabled.color};
    `}
transition: 0.4s all ease;
`;
export const EmptyCart = styled.h1`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 300;
  width: 100%;
`;
