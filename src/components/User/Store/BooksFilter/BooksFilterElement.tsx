import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;

  border-bottom: 2px dashed ${({ theme }) => theme.border[2]};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 30rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    min-width: 100%;
    width: 100%;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  position: absolute;
  left: 0;
  padding-left: 0.8rem;
  z-index: 2;
  > svg {
    height: 1.2rem;
    stroke-width: 58;
    stroke: ${({ theme }) => theme.input.searchIcon};
  }
`;

type TInput = {
  isLoading?: boolean;
};

export const Input = styled.input<TInput>`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  font-weight: 400;
  color: ${({ theme }) => theme.input.color};
  background: ${({ theme }) => theme.background[2]};
  text-decoration: none;
  padding: 0 0.5rem;
  padding-left: 2.5rem;
  height: 2.5rem;
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border: 1px solid ${({ theme }) => theme.input.border};
  outline: none;
  position: relative;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.input.placeholder};
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.input.placeholder};
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: ${({ theme }) => theme.input.placeholder};
  }

  ::-webkit-scrollbar {
    width: ${({ theme }) => theme.input.placeholder};
  }

  //hidden arrow number
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: ${({ theme }) => theme.input.color};
    -webkit-box-shadow: 0 0 0 50px ${({ theme }) => theme.input.background}
      inset;
    box-shadow: 0 0 0 50px ${({ theme }) => theme.input.background} inset;
  }
  &.error {
    border: 1px solid ${({ theme }) => theme.input.error.border};
    color: ${({ theme }) => theme.input.error.color};
    :focus {
      box-shadow: ${({ theme }) => theme.input.error.boxShadow};
    }
  }
  :hover {
  }

  :focus {
    ${({ isLoading, disabled }) =>
      !isLoading &&
      !disabled &&
      css`
        background: ${({ theme }) => theme.background[2]};
        box-shadow: ${({ theme }) => theme.input.focus.boxShadow};
        border: 1px solid ${({ theme }) => theme.input.focus.border};
      `}
  }

  ${({ isLoading, disabled }) =>
    (isLoading || disabled) &&
    css`
      background: ${({ theme }) => theme.input.disabled.background};
      color: ${({ theme }) => theme.input.disabled.color};
      box-shadow: none;
      border: 1px solid ${({ theme }) => theme.input.border};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.9rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;
