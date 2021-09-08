import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled.div`
  background: ${({ theme }) => theme.body.background};
  transition: 0.4s all ease;
`;
export const AdminContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.v2.track};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.scrollbar.v2.thumb};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v2.hover.thumb};
  }
`;

type TAdminWrapper = {
  isOpen: boolean;
};

export const AdminWrapper = styled.div<TAdminWrapper>`
  display: flex;
  flex-direction: column;
  margin-left: 15rem;
  margin-top: 2rem;
  transition: 0.3s all ease;
  padding: 0.5rem 1rem;
  ${({ isOpen }) =>
    !isOpen &&
    css`
      margin-left: 0;
    `}
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    ${({ isOpen }) =>
      isOpen &&
      css`
        margin-left: 0;
      `}
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    margin-left: 0;
    padding: 0 0.5rem;
  }
  transition: 0.4s all ease;
`;

export const Footer = styled.div`
  font-family: "Roboto", sans-serif;
  border-radius: ${({ theme }) => theme.section.borderRadius};
  font-weight: 300;
  font-size: 1rem;
  height: 3rem;
  margin-top: 3rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: ${({ theme }) => theme.footer.background};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  color: ${({ theme }) => theme.footer.color};
`;
