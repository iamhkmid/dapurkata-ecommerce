import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0 0.3rem;
  max-height: 12rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
`;

type TInputRadio = {
  isSelected: boolean;
};

export const InputRadio = styled.div<TInputRadio>`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  padding: 0.5rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.section.border};
  :hover {
    border: 1px solid ${({ theme }) => theme.input.focus.border};
  }
  ::before {
    content: "";
    position: absolute;
    left: 1rem;
    height: 0.4rem;
    aspect-ratio: 1/1;
    border-radius: 100%;
    background: ${({ theme }) => theme.input.background};
    border: 5px solid transparent;
    transition: 0.4s all ease;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      border: 1px solid ${({ theme }) => theme.input.focus.border};
      ::before {
        border: 5px solid ${({ theme }) => theme.button.primary.background};
        background: transparent;
      }
    `}
  transition: 0.4s border ease;
`;

export const Detail = styled.div`
  display: flex;
  margin-left: 2.5rem;
  flex-direction: column;
  gap: 0.5rem;
  .text-service {
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 0.8;
    transition: none;
  }
  .text-description {
    font-size: 0.7rem;
    font-weight: 400;
    line-height: 0.8;
    transition: none;
  }
  .text-cost {
    font-size: 0.9rem;
    font-weight: 600;
    transition: none;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 0.3rem;
    .text-service {
      font-size: 0.7rem;
    }
    .text-description {
      font-size: 0.6rem;
    }
    .text-cost {
      font-size: 0.8rem;
    }
  }
  -moz-transition: none;
  -webkit-transition: none;
  -o-transition: all 0 ease-in;
  transition: none;
`;

export const Estimation = styled.h1`
  font-size: 0.9rem;
  font-weight: 500;
  margin-right: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    margin-right: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
  }
`;
