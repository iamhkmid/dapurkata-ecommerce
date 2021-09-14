import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding-top: 5rem;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 20px;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2rem;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  border: 1px solid transparent;
  cursor: pointer;
  :hover {
    border-color: ${({ theme }) => theme.content.bookCard.hover.border};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  transition: 0.4s all ease;
`;

export const CoverWrapper = styled.div`
  display: flex;
  width: 100%;
  aspect-ratio: 2.2/3;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  position: relative;
`;

export const BookInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 3rem;
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
  }
  .author {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.color[3]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.6rem;
    }
  }
`;
