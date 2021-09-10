import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
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

export const Section = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  max-width: 80vw;
  max-height: 90vh;
  min-width: 30vw;
  background: ${({ theme }) => theme.background[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
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
  transition: 0.4s all ease;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 1rem 1.5rem;
  }
`;
export const InputGroup = styled(motion.div)`
  display: flex;
  width: 100%;
  padding: 0 1rem;
  flex-direction: column;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;

export const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;
`;
export const SpanGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 0.5rem;
  justify-content: flex-end;
  align-items: flex-start;
`;
