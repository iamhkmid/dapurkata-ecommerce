import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const BookCardsLoading = () => {
  return (
    <Cards>
      {Array.from(Array(12).keys()).map((val) => (
        <Card key={val}>
          <CoverWrapper className="cover" />
          <BookInfo>
            <div className="info1">
              <div className="title" />
              <div className="author" />
            </div>
            <div className="info2">
              <div className="price" />
            </div>
          </BookInfo>
        </Card>
      ))}
    </Cards>
  );
};

export default BookCardsLoading;

const shimmer = keyframes`0%{
    background-position: -450px 0;
  }
  100%{
    background-position: 450px 0;
 }

`;
export const Cards = styled(motion.div)`
  margin: 0 auto;
  padding-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 10px;
  }
`;
const Card = styled.div`
  display: flex;
  font-family: "Mulish", sans-serif;
  flex-direction: column;
  position: relative;
  margin-top: 1rem;
  padding: 0rem 0.5rem;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};

  .cover::before,
  .title::before,
  .author::before,
  .price::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.loading[1]} 0%,
      ${({ theme }) => theme.loading[2]} 20%,
      ${({ theme }) => theme.loading[1]} 60%,
      ${({ theme }) => theme.loading[1]} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    animation: ${shimmer} 1s linear infinite;
  }

  transition: 0.4s all ease;
  transition-property: background;
`;

const CoverWrapper = styled.div`
  display: flex;
  position: relative;
  top: -1rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background: ${({ theme }) => theme.loading[1]};
  aspect-ratio: 2.1/3;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: space-between;
  top: -0.5rem;
  gap: 9px;
  overflow: hidden;
  .info1 {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .title {
    display: flex;
    min-height: 0.9rem;
    position: relative;
    background: ${({ theme }) => theme.loading[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .author {
    display: flex;
    min-height: 0.6rem;
    min-width: 4rem;
    position: relative;
    width: fit-content;
    background: ${({ theme }) => theme.loading[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 9px;
    }
  }
  .price {
    display: flex;
    min-height: 1rem;
    position: relative;
    min-width: 6rem;
    width: fit-content;
    background: ${({ theme }) => theme.loading[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .info2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .star {
    > div {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      font-size: 12px;
      font-weight: 700;
      color: ${({ theme }) => theme.color[2]};
    }
    display: flex;
    height: 100%;
    align-items: center;
    > svg {
      height: 0.9rem;
      fill: ${({ theme }) => theme.color[7]};
    }
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
`;

const InputRadio = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.input.border};
  .icon-radio::before,
  .text-service::before,
  .text-description::before,
  .text-cost::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to right,
      ${({ theme }) => theme.loading[1]} 0%,
      ${({ theme }) => theme.loading[2]} 20%,
      ${({ theme }) => theme.loading[1]} 40%,
      ${({ theme }) => theme.loading[1]} 100%
    );
    background-repeat: no-repeat;
    background-size: 450px 400px;
    animation: ${shimmer} 1s linear infinite;
  }

  transition: 0.4s border ease;
`;

const IconRadio = styled.div`
  height: 1rem;
  aspect-ratio: 1/1;
  border-radius: 100%;
  background: ${({ theme }) => theme.input.background};
  position: relative;
  overflow: hidden;
  transition: 0.4s all ease;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;

  .text-service {
    background: ${({ theme }) => theme.loading[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    height: 0.8rem;
    width: 30%;
    position: relative;
    overflow: hidden;
  }
  .text-description {
    background: ${({ theme }) => theme.loading[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    height: 0.7rem;
    width: 30%;
    position: relative;
    overflow: hidden;
  }
  .text-cost {
    background: ${({ theme }) => theme.loading[1]};
    border-radius: ${({ theme }) => theme.borderRadius};
    height: 0.9rem;
    width: 20%;
    position: relative;
    overflow: hidden;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 0.3rem;
    .text-service {
      height: 0.7rem;
      width: 50%;
    }
    .text-description {
      height: 0.6rem;
      width: 50%;
    }
    .text-cost {
      height: 0.8rem;
      width: 30%;
    }
  }
  -moz-transition: none;
  -webkit-transition: none;
  -o-transition: all 0 ease-in;
  transition: none;
`;
