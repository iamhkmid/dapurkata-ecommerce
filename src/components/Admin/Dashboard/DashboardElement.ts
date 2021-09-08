import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  font-family: "Roboto", sans-serif;
  height: 20rem;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.section.color};
`;

export const Navigation = styled.ul`
  display: flex;
`;

export const NavItem = styled.li``;
