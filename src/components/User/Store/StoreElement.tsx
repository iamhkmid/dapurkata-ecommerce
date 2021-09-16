import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 5rem 0;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background[1]};
  color: ${({ theme }) => theme.color[1]};

  transition: 0.4s all ease;
`;

export const Section = styled.div`
  display: flex;
  width: 80%;
  padding: 0 0.5rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    width: 90%;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
  }
  flex-direction: column;
`;
export const SectionTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 500;
`;

export const Cards = styled.div`
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

export const Card = styled.div`
  display: flex;
  font-family: "Mulish", sans-serif;
  flex-direction: column;
  position: relative;
  margin-top: 1rem;
  padding: 0rem 0.5rem;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid transparent;
  cursor: pointer;
  :hover {
    border-color: ${({ theme }) => theme.content.bookCard.hover.border};
    box-shadow: rgba(31, 31, 58, 0.164) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  transition: 0.4s all ease;
`;

export const CoverWrapper = styled.div`
  display: flex;
  position: relative;
  top: -1rem;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  aspect-ratio: 2.2/3;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: space-between;
  top: -0.5rem;
  gap: 5px;
  overflow: hidden;
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    line-height: 1.2;
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .author {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 11px;
    font-weight: 400;
    color: ${({ theme }) => theme.color[3]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 9px;
    }
  }
  .price {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 14px;
    height: 100%;
    font-weight: 400;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 12px;
    }
  }
  .info2 {
    display: flex;
    justify-content: space-between;
  }
  .star {
    > h1 {
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
