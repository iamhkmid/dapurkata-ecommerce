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
  right: -10px;
  min-width: 35rem;
  border: 1px solid ${({ theme }) => theme.border[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
  ::after {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    top: -9px;
    z-index: 10;
    right: 20px;

    border-top: 1px solid ${({ theme }) => theme.border[2]};
    border-bottom: 0px solid ${({ theme }) => theme.border[2]};
    border-left: 1px solid ${({ theme }) => theme.border[2]};
    border-right: 0px solid ${({ theme }) => theme.border[2]};
    transform: rotate(45deg);
    background: ${({ theme }) => theme.background[2]};
  }
`;
