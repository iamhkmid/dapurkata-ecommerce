import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 1rem;
  min-width: 50%;
  max-width: max-content;
  background: ${({ theme }) => theme.section.background};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  border-radius: ${({ theme }) => theme.section.borderRadius};
  position: relative;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    min-width: 100%;
  }
  transition: 0.4s all ease;
  transition-property: width, height;
`;
export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.section.color};
`;
export const FormContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.section.background};
`;
export const InputGroup = styled(motion.div)`
  display: flex;
  width: 100%;
  padding: 0 1rem;
  flex-direction: column;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;

export const Form = styled.form`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

type TErrorMessage = {
  status: string;
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

export const SubmitWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-start;
  width: max-content;
  align-items: center;
  > button {
    width: 100%;
  }
`;

export const SpanGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;
