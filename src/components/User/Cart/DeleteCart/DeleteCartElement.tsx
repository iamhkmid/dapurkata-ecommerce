import styled from "styled-components";

export const Main = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.2rem;
  border-radius: 0.1rem;
  > svg {
    height: 1.2rem;
    stroke-width: 1.5px;
  }
  background: transparent;
  border: 1px solid ${({ theme }) => theme.border[2]};
  color: ${({ theme }) => theme.color[2]};
  overflow: hidden;
  :hover {
    background: ${({ theme }) => theme.button.danger.background};
    color: ${({ theme }) => theme.button.danger.color};
  }

  :disabled {
    cursor: default;
    color: ${({ theme }) => theme.button.disabled.color};
    border-color: ${({ theme }) => theme.button.disabled.background};
    :hover {
      color: ${({ theme }) => theme.button.disabled.color};
      border-color: ${({ theme }) => theme.button.disabled.background};
    }
  }
  transition: 0.4s all ease;
`;
