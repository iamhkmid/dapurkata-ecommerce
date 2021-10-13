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

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 3rem 0.2rem;
  }
  transition: 0.4s all ease;
`;

export const Container = styled(motion.div)`
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
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
    gap: 0.5rem;
    padding: 1rem;
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

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  border-top: 2px dashed ${({ theme }) => theme.border[2]};
  gap: 0.3rem;
  > div {
    font-size: 0.8rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    > div {
      font-size: 0.7rem;
    }
  }
`;

export const ButtonLink = styled.div`
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  font-weight: 400;
  padding: 0 0.2rem;
  font-size: 0.9rem;
  height: fit-content;
  background: transparent;
  color: ${({ theme }) => theme.link.color};
  border: none;
  outline: none;
  border-radius: 5px;

  :hover {
    color: ${({ theme }) => theme.link.hover.color};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;
