import { motion } from "framer-motion";
import NextLink from "next/link";
import styled from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  border-radius: ${({ theme }) => theme.section.borderRadius};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  background: ${({ theme }) => theme.section.background};
  color: ${({ theme }) => theme.section.color};
  top: 110%;
  right: 0.2%;
  z-index: 12;
  padding: 0.5rem 1rem 1rem 1rem;
  min-width: 15rem;
  width: max-content;
  cursor: default;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 95vw;
  }

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
  transition: 0.4s all ease;
  transition-property: width, height;
`;

export const UserInfo = styled.div`
  display: flex;
  text-align: center;
  gap: 0.5rem;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;
export const PhotoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.body.background};
  border: 1px solid ${({ theme }) => theme.section.border};
  height: 5rem;
  width: 5rem;
  position: relative;
  transition: 0.4s all ease;
`;
export const FullName = styled.h1`
  font-size: 1.1rem;
  max-width: 14rem;
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
  padding-top: 0.5rem;
  border-top: 1px solid ${({ theme }) => theme.section.border};
`;

export const Li = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 0.9rem;
  border-radius: ${({ theme }) => theme.section.borderRadius};
  font-weight: 300;
  height: 100%;
  width: 100%;
  text-align: start;
  :hover {
    color: ${({ theme }) => theme.button.hover.list.color};
    background: ${({ theme }) => theme.button.hover.list.background};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.8rem;
  }
  transition: 0.4s all ease;
`;
export const Item = styled.h1`
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0.5rem;
  }
`;

export const NLink = styled(NextLink)``;
export const Anchor = styled.a`
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0.5rem;
  }
`;
