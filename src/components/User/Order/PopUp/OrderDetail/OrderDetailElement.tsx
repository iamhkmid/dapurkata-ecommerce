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
  background: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.color[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  flex-direction: column;
  position: relative;
  max-width: 50%;
  min-height: 80%;
  max-height: 95%;
  min-width: 35%;
  font-size: 1rem;
  margin: 0.2rem;
  overflow: hidden;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    min-width: 50%;
    max-width: 90%;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
    max-width: 100%;
  }
  transition: 0.4s all ease;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 1rem;
  }
`;
