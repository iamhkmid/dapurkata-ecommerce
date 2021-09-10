import { motion } from "framer-motion";
import NextLink from "next/link";
import styled from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  position: absolute;
  cursor: default;
  background: ${({ theme }) => theme.background[2]};
  color: ${({ theme }) => theme.color[1]};
  top: 95%;
  right: 0%;
  min-width: 35rem;
  border: 1px solid ${({ theme }) => theme.border[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
  ::after {
    content: "";
    position: absolute;
    bottom: 100%;
    right: 10px;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent ${({ theme }) => theme.border[2]}
      transparent;
  }
`;
