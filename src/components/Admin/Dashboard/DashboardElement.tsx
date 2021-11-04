import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
  font-family: "Poppins", sans-serif;
  flex-direction: column;
  display: flex;
  width: 100%;
  gap: 1rem;
`;

export const Section = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    flex-direction: column;
  }
`;

export const Graph = styled.div`
  display: flex;
  min-height: 10rem;
  width: 100%;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.background[2]};
`;
