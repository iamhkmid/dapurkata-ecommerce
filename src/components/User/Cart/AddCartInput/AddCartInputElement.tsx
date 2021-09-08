import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const InputLabel = styled.label`
  font-weight: 400;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.section.color};
`;

export const InputWrapper = styled.div`
  display: flex;
`;

export const Input = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.navbar.dropdown.border};
  width: 2.2rem;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  color: ${({ theme }) => theme.section.color};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
`;

export const AmountBtn = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;
  padding: 1px;
  border-radius: 100%;
  outline: none;
  border: none;
  background: ${({ theme }) => theme.button.primary.background};
  color: ${({ theme }) => theme.button.primary.color};
  :hover {
    background: ${({ theme }) => theme.button.hover.primary.background};
    color: ${({ theme }) => theme.button.hover.primary.color};
  }
  :disabled {
    cursor: default;
    background: ${({ theme }) => theme.button.disabled.background};
    color: ${({ theme }) => theme.button.disabled.color};
  }
  > svg {
    height: 1.2rem;
    stroke-width: 0.2rem;
  }
  transition: 0.4s all ease;
`;
