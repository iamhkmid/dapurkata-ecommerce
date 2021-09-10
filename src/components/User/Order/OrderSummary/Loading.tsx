import styled, { css, keyframes } from "styled-components";

const shimmer = keyframes`0%{
    background-position: -450px 0;
  }
  100%{
    background-position: 450px 0;
 }
`;

const Main = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  gap: 0.5rem;

  .load::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.loading[1]} 0%,
      ${({ theme }) => theme.loading.background2} 20%,
      ${({ theme }) => theme.loading[1]} 40%,
      ${({ theme }) => theme.loading[1]} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    animation: ${shimmer} 1s linear infinite;
  }
`;

const DetailPrice = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > div.group {
    display: flex;
    justify-content: space-between;
    > div {
      height: 1.1rem;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        height: 1rem;
      }
    }
  }
  > div.group > div.key1 {
    background: ${({ theme }) => theme.loading[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 4rem;
    position: relative;
    overflow: hidden;
  }
  > div.group > div.key2 {
    background: ${({ theme }) => theme.loading[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 5rem;
    position: relative;
    overflow: hidden;
  }
  > div.group > div.value1 {
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.loading[1]};
    width: 6rem;
    position: relative;
    overflow: hidden;
  }
  > div.group > div.value2 {
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.loading[1]};
    width: 5rem;
    position: relative;
    overflow: hidden;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  text-align: start;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 0.3rem;
  > div:nth-child(1) {
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.loading[1]};
    height: 1.4rem;
    width: 6rem;
    position: relative;
    overflow: hidden;
  }
  > div:nth-child(2) {
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.loading[1]};
    height: 1.4rem;
    width: 6rem;
    position: relative;
    overflow: hidden;
  }
`;

const Loading = () => {
  return (
    <Main>
      <DetailPrice>
        <div className="group">
          <div className="key1 load" />
          <div className="value1 load" />
        </div>
        <div className="group">
          <div className="key2 load" />
          <div className="value2 load" />
        </div>
      </DetailPrice>
      <TotalPrice>
        <div className="load" />
        <div className="load" />
      </TotalPrice>
    </Main>
  );
};

export default Loading;
