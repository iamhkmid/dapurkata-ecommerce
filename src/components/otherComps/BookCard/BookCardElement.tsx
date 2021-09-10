import styled, { css } from "styled-components";

export const Main = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  width: 9rem;
  aspect-ratio: 1/1.8;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid transparent;
  background: ${({ theme }) => theme.background[2]};

  :hover {
    border-color: ${({ theme }) => theme.button.primary.background};
    box-shadow: ${({ theme }) => theme.boxShadow};
    .group-1 {
      text-decoration: underline;
      text-decoration-color: white;
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 8rem;
  }
  transition: 0.4s all ease;
`;
export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  aspect-ratio: 1/1.5;
  padding: 0.1rem;
  overflow: hidden;

  transition: 0.4s all ease;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.3rem 0.3rem 0.5rem 0.3rem;
  aspect-ratio: 1/0.3;
  justify-content: space-between;
  transition: 0.4s all ease;
`;
export const BookTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 3rem;
  max-height: 3rem;
  margin-top: 0.5rem;
`;

export const InfoGroup1 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 3rem;
  width: 100%;

  > h1 :nth-child(1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.content.bookCard.color.title};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
  }
  > h1 :nth-child(2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 0.7rem;
    font-weight: 400;
    color: ${({ theme }) => theme.content.bookCard.color.author};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.6rem;
    }
  }
`;

export const InfoGroup2 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  .sub-group-2 {
    display: flex;
    align-items: flex-end;
  }
`;
export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
export const Stock = styled.h1`
  font-size: 0.7rem;
  font-weight: 400;
  width: fit-content;
  height: fit-content;
  padding: 0 0.3rem;
  color: white;
  border-radius: 10px;
  background: #00a886;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.6rem;
  }
`;

export const ItemPrice = styled.h1`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color[1]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
`;

type TIconAddToCart = {
  active?: boolean;
};
export const IconAddToCart = styled.div<TIconAddToCart>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  width: 1.8rem;
  aspect-ratio: 1/1;
  border-radius: 100%;
  border: 1px solid ${({ theme }) => theme.content.bookCard.color.cart};
  color: ${({ theme }) => theme.content.bookCard.color.cart};
  :hover {
    color: ${({ theme }) => theme.content.bookCard.hover.color.cart};
    border: 1px solid ${({ theme }) => theme.content.bookCard.hover.color.cart};
  }
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.content.bookCard.active.color.cart};
      border: 1px solid
        ${({ theme }) => theme.content.bookCard.active.color.cart};
    `}
  > svg {
    height: max-content;
    background: transparent;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 1.5rem;
  }
  transition: 0.4s all ease;
`;
