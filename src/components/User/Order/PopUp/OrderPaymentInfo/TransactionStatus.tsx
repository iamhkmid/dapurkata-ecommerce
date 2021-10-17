import { FC } from "react";
import styled, { css } from "styled-components";
import LoadingWaitPayement from "../../../../otherComps/Loading/LoadingWaitPayement";
type TProps = {
  status: string;
};
const TransactionStatus: FC<TProps> = ({ status }) => {
  return (
    <Main>
      <Status isShowed={status === "pending"}>
        <div className="loading-wrapper">
          <LoadingWaitPayement />
        </div>
        <h1>Menunggu Pembayaran</h1>
      </Status>
      <Status isShowed={status === "settlement"} status={status}>
        <h1 className="payment-success">Pembayaran Berhasil</h1>
      </Status>
      <Status
        isShowed={
          status === "deny" || status === "cancel" || status === "expire"
        }
        status={status}
      >
        <h1 className="payment-error">Waktu Pembayaran Habis</h1>
      </Status>
    </Main>
  );
};

export default TransactionStatus;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
type TStatus = {
  isShowed: boolean;
  status?: string;
};
const Status = styled.div<TStatus>`
  display: flex;
  width: max-content;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0 2rem;
  gap: 0.5rem;
  position: relative;
  max-height: 0;
  overflow: hidden;
  ${({ isShowed }) =>
    isShowed &&
    css`
      padding: 0.5rem 2rem;
      max-height: 3rem;
    `}
  ${({ isShowed, status, theme }) =>
    isShowed &&
    status === "settlement" &&
    (theme.name === "light"
      ? css`
          background: #00ff8048;
        `
      : css`
          background: #00ff8013;
        `)}
    ${({ isShowed, status, theme }) =>
    isShowed &&
    (status === "deny" || status === "cancel" || status === "expire") &&
    (theme.name === "light"
      ? css`
          background: #ff000028;
        `
      : css`
          background: #ff00001a;
        `)}
    
  > div.loading-wrapper {
    display: flex;
    position: absolute;
    left: 0;
  }
  > h1 {
    padding-left: 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color[2]};
  }
  > h1.payment-success {
    color: ${({ theme }) => theme.color[6]};
  }
  > h1.payment-error {
    color: ${({ theme }) => theme.color[5]};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > h1 {
      font-size: 0.8rem;
    }
  }
  transition: 0.4s all ease;
`;
