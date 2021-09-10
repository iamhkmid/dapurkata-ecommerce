import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Main = styled(motion.div)`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.popup};
  z-index: 100;
  align-items: center;
  justify-content: center;
`;

export const Section = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  max-width: 50%;
  max-height: 90%;
  min-width: 30%;
  background: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.color[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  flex-direction: column;
  position: relative;
  font-size: 1rem;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    max-width: 90%;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    margin: 0.2rem;
    width: 100%;
    max-width: 100%;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0.5rem;
  }
`;
export const BtnWrapper = styled.div`
  display: flex;
  margin: 0 0.5rem;
  gap: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.border[2]};
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 1rem;
  max-height: 40vh;
  border: 1px solid ${({ theme }) => theme.border[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 0.2rem 0.5rem;
  width: 100%;
  ::-webkit-scrollbar {
    width: 10px;
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
  cursor: pointer;
  gap: 0.5rem;
  width: 100%;
`;

type TInfo = {
  active: boolean;
};

export const Info = styled.div<TInfo>`
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  width: 100%;
  color: ${({ theme }) => theme.button.base.color};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.section.borderRadius};
  border: 1px solid ${({ theme }) => theme.input.focus.border};

  :hover {
    color: ${({ theme }) => theme.button.hover.base.color};
    box-shadow: ${({ theme }) => theme.input.focus.boxShadow};
  }
  ${({ active }) =>
    active &&
    css`
      border: 1px solid transparent;
      background: ${({ theme }) => theme.button.primary.background};
      color: ${({ theme }) => theme.button.primary.color};
      :hover {
        background: ${({ theme }) => theme.button.hover.primary.background};
        color: ${({ theme }) => theme.button.hover.primary.color};
      }
    `};
  > h1 :nth-child(1) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 0.9rem;
    font-weight: 500;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
  }
  > h1 :nth-child(2) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 0.8rem;
    font-weight: 400;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.7rem;
    }
  }
  transition: 0.4s all ease;
`;

export const BtnLiWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
