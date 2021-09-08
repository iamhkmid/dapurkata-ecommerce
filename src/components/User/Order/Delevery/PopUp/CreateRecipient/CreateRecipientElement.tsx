import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Main = styled(motion.div)`
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

export const Section = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  background: ${(props) => props.theme.section.background};
  color: ${(props) => props.theme.section.color};
  border-radius: ${({ theme }) => theme.section.borderRadius};
  flex-direction: column;
  position: relative;
  max-width: 50%;
  min-height: 80%;
  max-height: 95%;
  min-width: 35%;
  font-size: 1rem;
  margin: 0.2rem;
  overflow: hidden;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    min-width: 50%;
    max-width: 90%;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
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
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 1rem;
  }
`;
export const Form = styled(motion.form)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;
type TErrorMessage = {
  status?: string;
};
export const ErrorMessage = styled.h1<TErrorMessage>`
  text-align: center;
  font-size: 0.8rem;
  font-weight: 300;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.message.success.color};
  ${({ status }) =>
    status === "success"
      ? css`
          background: ${({ theme }) => theme.message.success.background};
        `
      : css`
          background: ${({ theme }) => theme.message.error.background};
        `}
`;
