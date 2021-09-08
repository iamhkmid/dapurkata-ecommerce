import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;
export const TableElement = styled.table`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  border-collapse: collapse;
  width: 100%;

  tr {
    .number {
      width: 2%;
      > div > div {
        display: none;
      }
    }
    .actions {
      > div > div {
        display: none;
      }
      width: 2%;
    }
    border: 1px solid ${({ theme }) => theme.table.border};
    th {
      font-weight: 500;
      position: relative;
      padding: 0.4rem 0.5rem;
      background: ${({ theme }) => theme.table.th.background};
      color: ${({ theme }) => theme.table.th.color};
      transition: 0.4s all ease;
    }
    td {
      background: ${({ theme }) => theme.table.td.background};
      padding: 0.4rem 0.5rem;
      color: ${({ theme }) => theme.table.td.color};
      border-bottom: 1px solid ${({ theme }) => theme.table.border};
      transition: 0.4s all ease;
    }
    :hover {
      td {
        background: ${({ theme }) => theme.table.hover.background};
        border-bottom-color: ${({ theme }) => theme.table.hover.border};
      }
      transition: 0.4s all ease;
    }
    transition: 0.4s all ease;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;

export const TableWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  border-radius: ${({ theme }) => theme.section.borderRadius};
  background: ${({ theme }) => theme.section.background};
  padding: 0.5rem;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.v1.track};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  transition: 0.4s all ease;
`;

export const TdWrapper = styled.div`
  display: flex;
  min-height: 2rem;
  align-items: center;
  justify-content: flex-start;
  transition: 0.4s all ease;
  transition-property: width, weight;
`;
export const ThWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: 0.4s all ease;
  transition-property: width, weight;
`;
type TThIcon = {
  rotare: boolean;
  hide: boolean;
};
export const ThIcon = styled.div<TThIcon>`
  color: ${({ theme }) => theme.button.background};
  > svg {
    height: 1.2rem;
  }
  ${(props) =>
    props.rotare &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `};
  ${(props) =>
    props.hide &&
    css`
      svg {
        color: transparent;
      }
    `}
`;

export const Footer = styled.div`
  display: flex;
  transition: 0.4s all ease;
  transition-property: width, weight;
`;
