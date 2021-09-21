import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  width: 30rem;
  background: ${({ theme }) => theme.background[2]};
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.color[1]};
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
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
`;

export const TextWrapper = styled.div`
  display: flex;
  padding: 0.5rem 1rem;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background[1]};
`;

export const TextGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  > h1.key {
    font-size: 0.9rem;
    font-weight: 500;
    min-width: 3rem;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.8rem;
      min-width: 2rem;
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
type TErrorMessage = {
  status: string;
};
export const Text1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color[2]};
`;
