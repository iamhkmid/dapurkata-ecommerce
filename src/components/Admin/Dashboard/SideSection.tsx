import moment from "moment";
import "moment/locale/id";
import { FC } from "react";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import getTransactionStatus from "../../../services/getTransactionStatus";
import {
  TDashboardLastOrders,
  TDashboardOnlineUsers,
} from "../../../types/dashboard";

type TProps = {
  lastOrders: TDashboardLastOrders[];
  onlineUsers: TDashboardOnlineUsers[];
};

const SideSection: FC<TProps> = (props) => {
  const { lastOrders, onlineUsers } = props;
  return (
    <Main>
      <Section>
        <h1 className="title">Pesanan Terakhir</h1>
        <ItemWrapperLastOrder>
          {lastOrders.map((val) => (
            <ItemLastOrder key={val.id} status={val.transactionStatus}>
              <div className="info-wrapper">
                <h1 className="name">{`${val.User.firstName} ${
                  val.User.lastName || ""
                }`}</h1>
                <h1 className="price">
                  <NumberFormat
                    prefix="Rp"
                    value={val.grossAmount}
                    displayType={"text"}
                    thousandSeparator={"."}
                    decimalSeparator={","}
                  />
                </h1>
                <h1 className="transaction-status">
                  {getTransactionStatus(val.transactionStatus)}
                </h1>
                <h1 className="transaction-time">
                  {moment(val.transactionTime)
                    .locale("id")
                    .format("dddd, DD MMMM YYYY | HH:mm")}
                </h1>
              </div>
            </ItemLastOrder>
          ))}
        </ItemWrapperLastOrder>
      </Section>
      <Section>
        <h1 className="title">Online</h1>
        <ItemWrapperOnlineUser>
          {onlineUsers.map((val) => (
            <ItemOnlineUser key={val.id}>
              <h1 className="name">{`${val.firstName} ${
                val.lastName || ""
              }`}</h1>
              <h1 className="role">{`> ${val.role}`}</h1>
            </ItemOnlineUser>
          ))}
        </ItemWrapperOnlineUser>
      </Section>
    </Main>
  );
};

export default SideSection;

const Main = styled.div`
  display: flex;
  padding: 0.5rem;
  min-width: 320px;
  height: fit-content;
  gap: 1rem;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    min-width: auto;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  color: ${({ theme }) => theme.color[2]};
  .title {
    margin: 0 0.5rem;
    margin-bottom: 0.2rem;
    color: ${({ theme }) => theme.color[8]};
    border-bottom: 2px solid ${({ theme }) => theme.button.list.background};
    font-size: 0.9rem;
    font-weight: 600;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 0.8rem;
    }
  }
`;

const ItemWrapperLastOrder = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  gap: 0.5rem;
  max-height: 12rem;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.input.borderRadius};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
`;

type TItem = {
  status: string;
};
const ItemLastOrder = styled.div<TItem>`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  padding: 0.5rem;
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.border[2]};
  position: relative;
  .info-wrapper {
    display: flex;
    position: relative;
    z-index: 2;
    gap: 2px;
    flex-direction: column;
  }
  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    z-index: 1;
    transition: 0.4s all ease;
  }
  :hover {
    ::before {
      background: ${({ theme }) => theme.button.hover.list.background};
    }
  }
  gap: 0.2rem;
  .name {
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 10px;
    }
  }
  .price {
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
    color: ${({ theme }) => theme.color[3]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 14px;
    }
  }
  .transaction-status {
    font-size: 11px;
    line-height: 1;
    padding: 0.3rem 0.5rem;
    border-radius: 3px;
    width: fit-content;
    font-weight: 500;
    background: ${({ theme, status }) =>
      theme.transactionStatus[status].background};
    color: ${({ theme, status }) => theme.transactionStatus[status].color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 9px;
    }
  }
  .transaction-time {
    font-size: 12px;
    line-height: 1;
    font-weight: 400;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 10px;
    }
  }
  transition: 0.4s all ease;
`;

const ItemWrapperOnlineUser = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
  max-height: 12rem;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.input.borderRadius};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
`;
const ItemOnlineUser = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 3px;
  :hover {
    background: ${({ theme }) => theme.button.hover.list.background};
    .name,
    .role {
      color: ${({ theme }) => theme.button.hover.list.color};
    }
  }
  ::before {
    content: "";
    position: absolute;
    left: 0.5rem;
    top: 50%;
    min-height: 0.5rem;
    min-width: 0.5rem;
    border-radius: 100%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.color[8]};
  }
  .name {
    padding-left: 1rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 0.7rem;
    }
  }
  .role {
    padding-left: 0.5rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
      font-size: 0.7rem;
    }
  }
  transition: 0.4s all ease;
`;
