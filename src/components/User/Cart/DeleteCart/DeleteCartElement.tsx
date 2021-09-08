import styled from "styled-components";

export const Main = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 100%;
  > svg {
    height: 1.3rem;
    stroke-width: 2px;
  }
  background: ${({ theme }) => theme.button.danger.background};
  color: ${({ theme }) => theme.button.danger.color};
  :hover {
    background: ${({ theme }) => theme.button.hover.danger.background};
    color: ${({ theme }) => theme.button.hover.danger.color};
  }

  :disabled {
    cursor: default;
    background: ${({ theme }) => theme.button.disabled.background};
    color: ${({ theme }) => theme.button.disabled.color};
    border-color: ${({ theme }) => theme.button.disabled.background};
    :hover {
      background: ${({ theme }) => theme.button.disabled.background};
      color: ${({ theme }) => theme.button.disabled.color};
      border-color: ${({ theme }) => theme.button.disabled.background};
    }
  }
  transition: 0.4s all ease;
`;
