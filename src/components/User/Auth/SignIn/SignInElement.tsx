import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => theme.background[1]};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 0;
  justify-content: center;
  transition: 0.4s all ease;
`;

export const Logo = styled.img`
  height: 4rem;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 960px) {
    height: 3.5rem;
  }
  @media screen and (max-width: 540px) {
    height: 3rem;
  }
  transition: 0.4s all ease;
`;

export const Container = styled(motion.div)`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background[2]};
  display: flex;
  gap: 1rem;
  width: 30rem;
  flex-direction: column;
  padding: 2rem;
  justify-content: space-around;
  position: relative;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    width: 30rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
    padding: 2rem 1rem;
  }
  transition: 0.4s all ease;
`;

export const Form = styled.form`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const ToggleWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 0;
`;
export const CompTittle = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.color[1]};
`;
