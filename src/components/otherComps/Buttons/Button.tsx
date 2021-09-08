import { FC } from "react";
import styled, { css } from "styled-components";
import IconsControl from "../../IconsControl";
import Loading2 from "../Loading/Loading2";
import TextLoading from "../Loading/TextLoading";
type TButtonElement = {
  color: string;
  isLoading?: boolean;
};
const ButtonElement = styled.button<TButtonElement>`
  font-family: "Poppins", sans-serif;
  display: flex;
  border-radius: ${({ theme }) => theme.button.borderRadius};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 0.9rem;
  min-height: 2.3rem;
  max-height: max-content;
  padding: 0.2rem 1rem;
  border: 1px solid transparent;
  outline: none;
  gap: 0.2rem;
  position: relative;
  overflow: hidden;
  > svg {
    stroke-width: 3px;
    height: 1rem;
  }
  ${({ theme, color }) => css`
    background: ${theme.button[color || "primary"].background};
    color: ${theme.button[color || "primary"].color};
    > svg {
      color: ${theme.button[color || "primary"].color};
    }
  `}

  :hover {
    ${({ theme, color }) => css`
      background: ${theme.button.hover[color || "primary"].background};
      color: ${theme.button.hover[color || "primary"].color};
    `}
  }

  :focus {
    ${({ theme, color }) => css`
      border: 1px solid ${theme.button.focus[color || "primary"].border};
      box-shadow: ${theme.button.focus[color || "primary"].boxShadow};
    `}
  }

  ${({ isLoading, disabled }) =>
    (isLoading || disabled) &&
    css`
      background: ${({ theme }) => theme.button.disabled.background};
      color: ${({ theme }) => theme.button.disabled.color};
      cursor: default;
      :hover {
        background: ${({ theme }) => theme.button.disabled.background};
        color: ${({ theme }) => theme.button.disabled.color};
      }
      :focus {
        border: 1px solid transparent;
        box-shadow: none;
      }
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
    min-height: 2rem;
    padding: 0.2rem 1rem;
  }
  transition: 0.4s all ease;
`;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  transition: 0.4s all ease;
`;
const ButtonIcon = styled.button<TButtonElement>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  > svg {
    height: 2rem;
    padding: 0.3rem;
  }
  ${({ theme, color }) => css`
    background: ${theme.button[color || "primary"].background};
    color: ${theme.button[color || "primary"].color};
  `}

  :hover {
    ${({ theme, color }) => css`
      background: ${theme.button.hover[color || "primary"].background};
      color: ${theme.button.hover[color || "primary"].color};
    `}
  }

  transition: 0.4s all ease;
`;

type TButton = {
  name: string;
  disabled?: boolean;
  type: "submit" | "button" | "buttonIcon";
  color?: "primary" | "danger" | "success" | "base" | "section" | "list";
  onClick?: any;
  icon?: string;
  isLoading?: boolean;
};

const Button: FC<TButton> = (Props) => {
  const { name, disabled, type, onClick, color, icon, isLoading } = Props;
  switch (type) {
    case "submit":
      return (
        <ButtonElement
          type="submit"
          disabled={disabled}
          color={color}
          isLoading={!!isLoading}
        >
          {icon && IconsControl(icon)}
          {name}
          {!!isLoading && (
            <LoadingWrapper>
              <Loading2 />
            </LoadingWrapper>
          )}
        </ButtonElement>
      );
    case "button":
      return (
        <ButtonElement
          type="button"
          onClick={onClick}
          isLoading={!!isLoading}
          disabled={disabled}
          color={color}
        >
          {icon && IconsControl(icon)}
          {name}
          {!!isLoading && (
            <LoadingWrapper>
              <Loading2 />
            </LoadingWrapper>
          )}
        </ButtonElement>
      );
    case "buttonIcon":
      return (
        <ButtonIcon onClick={onClick} color="danger">
          {IconsControl("x")}
        </ButtonIcon>
      );
    default:
      return null;
  }
};

export default Button;
