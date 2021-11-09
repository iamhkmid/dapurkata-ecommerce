import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  min-width: 80%;
  width: 90%;
  min-height: 70%;
  height: 90%;

  background: ${({ theme }) => theme.background[2]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    height: 100%;
    width: 100%;
  }
`;

export const Text1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  padding: 0.2rem 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.color[1]};
`;

export const DetailBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 2rem;
  padding: 1rem 2rem 2rem 2rem;
  overflow: auto;

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
