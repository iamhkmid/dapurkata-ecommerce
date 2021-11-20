import { FC, useContext, useState } from "react";
import styled, { css } from "styled-components";
import { AdminNavCtx } from "../../../../../../contexts/AdminNavCtx";
import FormUpdateUser from "./FormUpdateUser";
type TActionDetail = {
  userId: string;
};
const ActionDetail: FC<TActionDetail> = ({ userId }) => {
  const { dispatch } = useContext(AdminNavCtx);
  const [nav, setNav] = useState("CHANGE_DATA");
  return (
    <Main>
      <div className="button-wrapper">
        <Button
          type="button"
          active={nav === "CHANGE_DATA"}
          onClick={() => setNav("CHANGE_DATA")}
        >
          Ubah Data
        </Button>
        <Button
          type="button"
          active={nav === "CHANGE_ROLE"}
          onClick={() => setNav("CHANGE_ROLE")}
        >
          Ubah Role
        </Button>
        <Button
          type="button"
          active={nav === "WISHLIST"}
          onClick={() => setNav("WISHLIST")}
        >
          Wishlist
        </Button>
        <Button
          type="button"
          active={nav === "SHOPPINGCART"}
          onClick={() => setNav("SHOPPINGCART")}
        >
          Keranjang
        </Button>
        <Button
          type="button"
          active={nav === "RECIPIENT"}
          onClick={() => setNav("RECIPIENT")}
        >
          Daftar Alamat
        </Button>
      </div>
      <div className="content-workspace">
        {nav === "CHANGE_DATA" && <FormUpdateUser userId={userId} />}
      </div>
    </Main>
  );
};

export default ActionDetail;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  .button-wrapper {
    gap: 8px;
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .content-workspace {
    display: flex;
    flex-direction: column;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.border[2]};
  }
`;
type TButton = {
  active?: boolean;
};
const Button = styled.button<TButton>`
  font-family: "Poppins", sans-serif;
  display: flex;
  border-radius: ${({ theme }) => theme.button.borderRadius};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: relative;
  font-weight: 500;
  height: 2.2rem;
  width: max-content;
  font-size: 14px;
  padding: 5px 10px;
  min-height: 16px;
  padding: 0.2rem 1rem;
  border: 1px solid transparent;
  outline: none;
  gap: 0.2rem;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.button.section.background};
  color: ${({ theme }) => theme.button.section.color};

  :hover {
    background: ${({ theme }) => theme.button.hover.section.background};
    color: ${({ theme }) => theme.button.hover.section.color};
  }
  :disabled {
    background: ${({ theme }) => theme.button.disabled.background};
    color: ${({ theme }) => theme.button.disabled.color};
    cursor: default;
    :hover {
      background: ${({ theme }) => theme.button.disabled.background};
      color: ${({ theme }) => theme.button.disabled.color};
    }
  }
  :focus {
    background: ${({ theme }) => theme.button.focus.background};
    color: ${({ theme }) => theme.button.focus.color};
  }
  ::after {
    content: "";
    position: absolute;
    height: 0;
    aspect-ratio: 1/1;
    left: 0.5rem;
    border-radius: 100%;
    background: ${({ theme }) => theme.button.focus.primary.border};
    transition: 0.4s all ease;
  }
  ${({ active }) =>
    active &&
    css`
      padding-left: 1.5rem;
      ::after {
        height: 10px;
      }
      color: ${({ theme }) => theme.button.hover.section.color};
      border: 1px solid ${({ theme }) => theme.button.focus.section.border};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 12px;
    min-height: 16px;
    padding: 0.2rem 0.5rem;
    ${({ active }) =>
      active &&
      css`
        padding-left: 1.5rem;
      `}
  }
  transition: 0.4s all ease;
`;
