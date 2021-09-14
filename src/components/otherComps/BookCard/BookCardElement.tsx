import styled, { css } from "styled-components";

export const Main = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  border: 1px solid transparent;
  padding: 0.2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.content.bookCard.background};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  :hover {
    border: 1px solid ${({ theme }) => theme.content.bookCard.hover.border};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    .group-1 {
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.color[2]};
    }
  }
  transition: 0.4s all ease;
`;
export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: max-content;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;

  transition: 0.4s all ease;
`;

export const InfoWrapper = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  width: 100%;
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
type TInfoGroup1 = {
  width: number;
};
export const InfoGroup1 = styled.div<TInfoGroup1>`
  display: flex;
  flex-direction: column;
  text-align: start;
  height: 3rem;
  max-width: ${({ width }) => `${width - 10}px`};

  > h1 :nth-child(1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: 1.2;
    font-size: 0.75rem;
    font-weight: 500;
    color: ${({ theme }) => theme.content.bookCard.color.title};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.65rem;
    }
  }
  > h1 :nth-child(2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 0.65rem;
    font-weight: 400;
    color: ${({ theme }) => theme.content.bookCard.color.author};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.55rem;
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
