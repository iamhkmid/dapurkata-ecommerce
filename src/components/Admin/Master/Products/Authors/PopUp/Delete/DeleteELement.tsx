import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  position: fixed;
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
  min-width: 30vw;
  background: ${(props) => props.theme.section.background};
  color: ${(props) => props.theme.section.color};
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

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0.5rem 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  background: ${({ theme }) => theme.section.background};
`;

export const TextWrapper = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.section.borderRadius};
  background: ${({ theme }) => theme.input.background};
`;

export const TextGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  > h1.key {
    font-size: 0.9rem;
    font-weight: 500;
    min-width: 4rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
      min-width: 3rem;
    }
  }
  > h1.separator {
    font-size: 0.9rem;
    font-weight: 400;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
  }
  > h1.value {
    font-size: 0.9rem;
    font-weight: 400;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
    }
  }
`;

export const Text1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ theme }) => theme.section.color};
`;
