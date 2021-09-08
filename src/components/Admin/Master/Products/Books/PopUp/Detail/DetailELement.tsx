import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.popUp.background};
  z-index: 100;
  align-items: center;
  justify-content: center;
`;
export const Section = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  max-width: 80vw;
  max-height: 90vh;
  min-width: 70vw;
  background: ${(props) => props.theme.section.background};
  border-radius: ${({ theme }) => theme.section.borderRadius};
  overflow: hidden;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    max-width: 90vw;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    margin: 0.2rem;
    width: 100%;
    max-width: 100%;
  }
`;

export const Text1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  padding: 0.2rem 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.section.color};
`;

export const DetailBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem 2rem 2rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.v1.track};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    padding: 1rem 1.5rem 1.5rem 1.5rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 1rem;
  }
  transition: 0.4s all ease;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80vw;
  min-height: 50vh;
  position: relative;
`;
