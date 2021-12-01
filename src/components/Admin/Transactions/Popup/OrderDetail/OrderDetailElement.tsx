import styled from "styled-components";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  background: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.color[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  flex-direction: column;
  position: relative;
  max-width: 80%;
  min-width: 80%;
  width: 80%;
  min-height: 90%;
  max-height: 90%;
  height: 90%;
  font-size: 1rem;
  overflow: hidden;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    max-width: 90%;
    min-width: 90%;
    width: 90%;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    min-height: 80%;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
  }
  transition: 0.4s all ease;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding: 1rem 2rem;
  gap: 1rem;
  > div {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 1rem;
  }
`;

export const OrderDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    font-size: 1.1rem;
    padding: 0.2rem 1rem;
    width: fit-content;
    border-radius: ${({ theme }) => theme.borderRadius};
    font-weight: 700;
    background: ${({ theme }) => theme.button.list.background};
    color: ${({ theme }) => theme.button.list.color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1rem;
    }
  }
  .info-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .val-wrapper {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    .name {
      position: relative;
      line-height: 1.2;
      ::before {
        display: flex;
        position: absolute;
        content: "";
        left: -1rem;
        top: 50%;
        transform: translateY(-50%);
        min-width: 0.6rem;
        min-height: 0.6rem;
        border-radius: 100%;
        background: ${({ theme }) => theme.button.primary.background};
      }
      font-size: 0.9rem;
      font-weight: 600;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 0.8rem;
      }
    }
    .value {
      font-size: 0.9rem;
      line-height: 1.2;
      color: ${({ theme }) => theme.color[2]};
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 0.8rem;
      }
    }
    .gross-amount {
      font-size: 1.1rem;
      font-weight: 600;
      color: ${({ theme }) => theme.color[3]};
    }
  }
`;
