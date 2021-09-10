import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  border-right: 1px solid ${({ theme }) => theme.border[3]};
  height: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  gap: 0.2rem;
  padding: 1rem 0.5rem;
  flex-direction: column;
  overflow: hidden;
`;

type TLi = { isActive?: boolean };

export const Li = styled.li<TLi>`
  display: flex;
  position: relative;
  height: 3rem;
  width: 13rem;
  padding-left: 1.5rem;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.color[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
  :hover {
    background: ${({ theme }) => theme.button.section.background};
    color: ${({ theme }) => theme.button.section.color};
  }
  ::before {
    content: "";
    height: 80%;
    width: 0.5rem;
    background: transparent;
    border-radius: ${({ theme }) => theme.borderRadius};
    position: absolute;
    right: -2rem;
    transition: 0.4s all ease;
  }
  ${({ isActive, theme }) =>
    isActive &&
    css`
      color: ${theme.color[3]};
      ::before {
        background: ${({ theme }) => theme.button.primary.background};
        right: -0.75rem;
      }
    `}
  &.logout {
    margin-top: 1rem;
  }
  transition: 0.4s all ease;
`;
