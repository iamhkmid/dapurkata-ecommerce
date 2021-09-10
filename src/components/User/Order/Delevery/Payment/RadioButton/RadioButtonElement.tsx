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
  gap: 1rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  padding: 0.5rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.input.border};
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
  background: #ffffffc5;
  padding: 0 0.5rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  gap: 0.5rem;
`;
