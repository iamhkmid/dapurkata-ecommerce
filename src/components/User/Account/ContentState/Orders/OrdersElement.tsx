import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  padding: 1rem 0.5rem;
  font-family: "Poppins", sans-serif;
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
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
export const TableOrders = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    height: 100%;
    background: ${({ theme }) => theme.background[2]};
    color: ${({ theme }) => theme.color[2]};
    z-index: 5;
  }
  > thead {
    tr {
      cursor: default;
    }
    th {
      font-size: 0.85rem;
      text-align: start;
      padding: 0.2rem 0.5rem;
      ::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.border[2]};
      }
    }
  }
  > tbody {
    tr {
      cursor: pointer;
      color: ${({ theme }) => theme.color[1]};
      :hover {
        background: ${({ theme }) => theme.button.hover.list.background};
        color: ${({ theme }) => theme.button.hover.list.color};
        transition: 0.4s all ease;
      }
    }
    td {
      font-size: 0.85rem;
      padding: 0.8rem 0.5rem;
      border-bottom: 1px solid ${({ theme }) => theme.border[2]};
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > thead {
      th {
        font-size: 0.8rem;
      }
    }
    > tbody {
      td {
        padding: 0.8rem 0.5rem;
        border-bottom: 1px solid ${({ theme }) => theme.border[2]};
      }
    }
  }
`;

type TTStatus = { status: string };
export const TransactionStatus = styled.div<TTStatus>`
  display: flex;
  padding: 0.2rem 0.3rem;
  font-size: 0.8rem;
  font-weight: 400;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.input.borderRadius};
  ${({ status, theme }) =>
    status === "pending" &&
    css`
      background: ${theme.transactionStatus[status].background};
      color: ${theme.transactionStatus[status].color};
      border: 1px solid ${theme.transactionStatus[status].border};
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;

export const GrossAmount = styled.h1`
  min-width: max-content;
`;

export const TransactionTime = styled.h1`
  min-width: 10rem;
`;
