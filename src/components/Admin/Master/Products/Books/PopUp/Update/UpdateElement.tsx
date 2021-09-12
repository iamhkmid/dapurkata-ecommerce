import styled, { css } from "styled-components";
import { motion } from "framer-motion";

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
  max-width: 90vw;
  max-height: 90vh;
  width: 90vw;
  height: 90vh;
  overflow: hidden;
  background: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.color[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-direction: column;
  position: relative;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    max-width: 90vw;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    margin: 0.2rem;
    width: 100vw;
    max-width: 100vw;
  }
`;
export const Body = styled.div`
  display: flex;
  height: 100%;
  max-height: 85vh;
  position: relative;
`;

type TContent = {
  showSideMenu: boolean;
};
export const Content = styled.div<TContent>`
  display: flex;
  margin-left: 0rem;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.input.borderRadius};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  ${({ showSideMenu }) =>
    showSideMenu &&
    css`
      margin-left: 10rem;
    `}

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    margin-left: 0;
  }

  transition: 0.4s all ease;
`;
