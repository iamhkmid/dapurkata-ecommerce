import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../../contexts/ThemeCtx";
import IconsControl from "../../IconsControl";
import { motion, AnimatePresence } from "framer-motion";

const Container = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid transparent;
  overflow: hidden;
  aspect-ratio: 1/1;
  :hover {
    color: ${({ theme }) => theme.button.color};
    background: ${({ theme }) => theme.input.focus.background};
    border: 1px solid ${({ theme }) => theme.input.focus.border};
  }
  transition: 0.4s all ease;
`;

export const IconWrapper = styled(motion.div)`
  > svg {
    height: 1.5rem;
    stroke-width: 2px;
  }
  padding: 0.2rem;
  color: ${({ theme }) => theme.color[1]};
`;
export const IconWrapper2 = styled(motion.div)`
  > svg {
    height: 1.5rem;
    stroke-width: 2px;
  }
  padding: 0.2rem;
  color: ${({ theme }) => theme.color[1]};
`;

const containerVariant = {
  hidden: {
    opacity: 0,
    y: "3rem",
    transition: {
      ease: "easeIn",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      mass: 0.5,
      damping: 10,
      stiffness: 80,
    },
  },
};
const ThemeToggle = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <Container
      onClick={(e) => {
        changeTheme();
        e.stopPropagation();
      }}
    >
      <AnimatePresence>
        {theme === "light" && (
          <IconWrapper
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            {IconsControl("sun")}
          </IconWrapper>
        )}
        {theme === "dark" && (
          <IconWrapper2
            variants={containerVariant}
            initial="hidden"
            animate="visible"
          >
            {IconsControl("moon")}
          </IconWrapper2>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default ThemeToggle;
