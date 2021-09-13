import styled from "styled-components";

export const Main = styled.div`
  display: flex;
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
    td {
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
