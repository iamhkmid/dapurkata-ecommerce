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
  justify-content: space-between;
  width: 100%;
  transition: 0.4s all ease;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: start;
  > h1:nth-child(1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
  }
  > h1:nth-child(2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.content.bookCard.color.author};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.6rem;
    }
  }
  > h1:nth-child(3) {
    font-size: 1.5rem;
    font-weight: 300;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 5rem 1fr;
  width: 100%;

  > button :nth-child(1) {
    background: ${({ theme }) => theme.button.base.background};
    color: ${({ theme }) => theme.button.base.color};
    border-color: ${({ theme }) => theme.button.hover.base.background};
    :hover {
      background: ${({ theme }) => theme.button.hover.base.background};
      color: ${({ theme }) => theme.button.hover.base.color};
      border-color: ${({ theme }) => theme.button.hover.base.background};
    }
  }
  > button :nth-child(2) {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    > svg {
      height: 1.5rem;
      stroke-width: 1.5px;
    }
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      > svg {
        height: 1.2rem;
      }
    }
    background: ${({ theme }) => theme.button.base.background};
    color: ${({ theme }) => theme.button.base.color};
    border-color: ${({ theme }) => theme.button.hover.base.background};
    :hover {
      background: ${({ theme }) => theme.button.hover.base.background};
      color: ${({ theme }) => theme.button.hover.base.color};
      border-color: ${({ theme }) => theme.button.hover.base.background};
    }
  }
  > button :nth-child(3) {
    background: ${({ theme }) => theme.button.primary.background};
    color: ${({ theme }) => theme.button.primary.color};
    border-color: ${({ theme }) => theme.button.primary.background};
    :hover {
      background: ${({ theme }) => theme.button.hover.primary.background};
      color: ${({ theme }) => theme.button.hover.primary.color};
    }
  }

  > button {
    font-family: "Poppins", sans-serif;
    font-size: 0.9rem;
    outline: none;
    border: none;
    height: 2.5rem;
    cursor: pointer;
    border: 1px solid;
    :disabled {
      cursor: default;
      background: ${({ theme }) => theme.button.disabled.background};
      color: ${({ theme }) => theme.button.disabled.color};
      border-color: ${({ theme }) => theme.button.disabled.background};
      :hover {
        background: ${({ theme }) => theme.button.disabled.background};
        color: ${({ theme }) => theme.button.disabled.color};
        border-color: ${({ theme }) => theme.button.disabled.background};
      }
    }
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
    transition: 0.4s all ease;
  }
`;

export const CartBtn = styled.div`
  display: flex;
  gap: 1rem;
`;
