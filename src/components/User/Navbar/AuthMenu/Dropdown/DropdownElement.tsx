import { motion } from "framer-motion";
import NextLink from "next/link";
import styled from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  background: ${({ theme }) => theme.section.background};
  color: ${({ theme }) => theme.section.color};
  border: 1px solid  ${({ theme }) => theme.section.border};
  border-radius: ${({ theme }) => theme.section.borderRadius};
  top: 95%;
  right: -20%;
  padding: 0.5rem 1rem 1rem 1rem;
  min-width: 17rem;
  width: max-content;
  cursor: default;
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

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.section.borderRadius};
  overflow: hidden;
  height: 5rem;
  width: 5rem;
  position: relative;
  margin: 0.5rem;
  background: ${({ theme }) => theme.body.background};
  border: 1px solid ${({ theme }) => theme.button.primary.background};
`;
export const FullName = styled.h1`
  font-size: 1.2rem;
  font-weight: 500;
`;
export const Email = styled.h1`
  font-size: 0.8rem;
  font-weight: 400;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
`;

export const Li = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 300;
  height: 100%;
  width: 100%;
  border-radius: ${({ theme }) => theme.section.borderRadius};
  text-align: start;
  :hover {
    color: ${({ theme }) => theme.button.hover.list.color};
    background: ${({ theme }) => theme.button.hover.list.background};
  }
  transition: 0.4s all ease;
`;
export const Item = styled.h1`
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;
`;

export const NLink = styled(NextLink)``;
export const Anchor = styled.a`
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;
`;
