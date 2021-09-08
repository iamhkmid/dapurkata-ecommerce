import styled from "styled-components";
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

export const Section = styled.div`
  font-family: "Poppins", sans-serif;
  display: flex;
  max-width: 80vw;
  max-height: 90vh;
  min-width: 30vw;
  background: ${(props) => props.theme.section.background};
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
  transition: 0.4s all ease;
`;
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 1rem 1.5rem;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  background: ${({ theme }) => theme.section.background};
`;

export const Text1 = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.section.color};
`;

export const Table = styled.table`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  border-collapse: collapse;
  width: 100%;

  tr {
    border: 1px solid ${({ theme }) => theme.table.border};
    th {
      position: relative;
      padding: 0.4rem 0.5rem;
      border: 1px solid ${({ theme }) => theme.table.border};
      background: ${({ theme }) => theme.table.th.background};
      color: ${({ theme }) => theme.table.th.color};
      transition: 0.4s all ease;
    }
    td {
      background: ${({ theme }) => theme.table.td.background};
      padding: 0.4rem 0.5rem;
      border: 1px solid ${({ theme }) => theme.table.border};
      color: ${({ theme }) => theme.table.td.color};
      transition: 0.4s all ease;
    }
    :hover {
      td {
        background: ${({ theme }) => theme.table.hover.background};
        border-bottom: 1px solid ${({ theme }) => theme.table.hover.border};
      }
      transition: 0.4s all ease;
    }
    transition: 0.4s all ease;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;
