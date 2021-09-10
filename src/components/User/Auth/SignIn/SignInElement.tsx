import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
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
  display: flex;
  width: 30rem;
  flex-direction: column;
  padding: 2rem;
  gap: 1rem;
  justify-content: space-around;
  position: relative;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    width: 30rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
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
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color[1]};
`;
