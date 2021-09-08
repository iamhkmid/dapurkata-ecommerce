import { motion } from "framer-motion";
import NextLink from "next/link";
import styled from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: none;
  position: sticky;
  gap: 1rem;
  max-height: 80vh;
  width: 100%;
  border: 1px solid  ${({ theme }) => theme.section.border};
  border-radius: ${({ theme }) => theme.section.borderRadius};
  margin-top: 0.2rem;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  background: ${({ theme }) => theme.section.background};
  color: ${({ theme }) => theme.section.color};
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    display: flex;
    flex-direction: column;
  }

  transition: 0.2s all ease;
`;
