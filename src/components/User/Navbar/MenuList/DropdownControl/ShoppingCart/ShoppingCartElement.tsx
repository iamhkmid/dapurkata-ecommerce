import { motion } from "framer-motion";
import NextLink from "next/link";
import styled from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  position: absolute;
  cursor: default;
  background: ${({ theme }) => theme.section.background};
  color: ${({ theme }) => theme.section.color};
  top: 95%;
  right: 0%;
  min-width: 26rem;
  border: 1px solid  ${({ theme }) => theme.section.border};
  border-radius: ${({ theme }) => theme.section.borderRadius};
  ::after {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 10px;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent
      ${({ theme }) => theme.navbar.dropdown.border} transparent;
  }
`;
