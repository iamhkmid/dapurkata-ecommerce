import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.section.borderRadius};
  overflow: hidden;
  cursor: default;
  color: ${({ theme }) => theme.section.color};
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  max-height: 15rem;
  width: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.section.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
`;

export const Li = styled.li`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 0.3rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.navbar.dropdown.border};
  transition: 0.4s all ease;
`;
export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 5.3rem;
  aspect-ratio: 1/1.5;
`;
export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: 100%;
  flex-direction: column;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Info = styled.div`
  text-align: start;
  > h1:nth-child(1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-transform: uppercase;
    font-size: 0.9rem;
    font-weight: 400;
    color: ${({ theme }) => theme.section.color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
    transition: 0.4s all ease;
  }
  > h1:nth-child(2) {
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
    transition: 0.4s all ease;
  }
  > h1:nth-child(3) {
    font-size: 0.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.section.color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
    transition: 0.4s all ease;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.navbar.dropdown.border};
  > button {
    font-size: 0.9rem;
    height: 2.5rem;
  }
  transition: 0.4s all ease;
`;

export const AmountPrice = styled.div`
  display: flex;
  font-family: "Roboto", sans-serif;
  text-align: start;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 600;
  > h1:nth-child(1) {
    color: ${({ theme }) => theme.section.color};
  }
  > h1:nth-child(2) {
    color: ${({ theme }) => theme.content.cart.color.total};
  }
`;

export const EmptyCart = styled.h1`
  text-align: center;
  font-size: 0.9rem;
  font-weight: 300;
  width: 100%;
`;
