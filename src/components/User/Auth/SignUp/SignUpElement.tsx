import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
  margin-top: 4rem;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 70vw;
  padding: 2rem 2rem;
  margin: 1rem 15vw;
  background: ${({ theme }) => theme.background[1]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    width: 90vw;
    padding: 2rem 1rem;
    margin: 1rem 10vw;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100vw;
    padding: 1rem 1rem;
    margin: 1rem 1vw;
  }
  transition: 0.4s all ease;
`;
export const FormWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    flex-direction: column;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;
export const InputGroup = styled(motion.div)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;

export const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ToggleWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
`;
export const CompTittle = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color[1]};
`;

export const SpanGroupGrid2 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.5rem;
`;
