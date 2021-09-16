import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.main)`
  display: flex;
  position: fixed;
  font-family: "Poppins", sans-serif;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.popup};
  z-index: 100;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid ${({ theme }) => theme.border[1]};
  transition: 0.4s all ease;
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1/1;
  border-radius: 100%;
  margin: 0.2rem 0.4rem;
  border: none;
  outline: none;
  cursor: pointer;
  > svg {
    height: 1rem;
  }
  background: ${({ theme }) => theme.button.base.background};
  color: ${({ theme }) => theme.button.base.color};
  :hover {
    background: ${({ theme }) => theme.button.hover.danger.background};
    color: ${({ theme }) => theme.button.hover.danger.color};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > svg {
      height: 0.9rem;
    }
  }
  transition: 0.4s all ease;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  background: ${({ theme }) => theme.background[2]};
  min-width: 80%;
  min-height: 70%;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    width: 30rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 98%;
  }
  transition: 0.4s all ease;
`;

export const Content = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 2rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    flex-direction: column;
    padding: 1rem;
  }
`;

export const ActionBtn = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
export const Images = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  gap: 1rem;
  transition: 0.4s all ease;
`;

export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 20px;
  height: 260px;
  aspect-ratio: 1/1;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.content.bookCard.cover.background};

  > div {
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: rgba(13, 18, 29, 0.158) 0px 1px 2px,
      rgba(13, 18, 29, 0.158) 0px 2px 4px, rgba(13, 18, 29, 0.158) 0px 4px 8px,
      rgba(13, 18, 29, 0.158) 0px 8px 16px,
      rgba(13, 18, 29, 0.158) 0px 16px 32px,
      rgba(13, 18, 29, 0.158) 0px 32px 64px;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    height: 100%;
    aspect-ratio: unset;
    width: 100%;
  }
  transition: 0.4s all ease;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  transition: 0.4s all ease;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 1.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1.2rem;
    }
  }
  .author {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.content.bookCard.color.author};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.9rem;
    }
  }
  .price {
    font-family: "Mulish", sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1.2rem;
    }
  }
`;

export const CartBtn = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AdditionalInfo = styled.div`
  display: grid;
  width: 100%;
  max-width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(7rem, 1fr));
  grid-gap: 8px;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
  }
  > div {
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 0.2rem 1rem;
    overflow: hidden;
    min-width: max-content;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.button.hover.base.background};
    color: ${({ theme }) => theme.button.list.color};
    .ai-name {
      font-size: 0.9rem;
      font-weight: 500;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 0.7rem;
      }
    }
    .ai-value {
      font-family: "Mulish", sans-serif;
      font-size: 0.9rem;
      font-weight: 400;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 0.7rem;
      }
    }
    .ai-star {
      > h1 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        font-size: 0.8rem;
        font-family: "Mulish", sans-serif;
        font-weight: 400;
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
        > svg {
          height: 0.8rem;
          fill: ${({ theme }) => theme.color[7]};
        }
        > h1 {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
