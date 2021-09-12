import styled, { css } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  justify-content: flex-start;
  height: max-content;
  padding: 0.5rem;
  width: 100%;
  background: ${({ theme }) => theme.background[2]};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    margin-left: 0;
    max-width: 100vw;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    margin-left: 0;
  }
  transition: 0.5s all ease;
  transition-property: margin-left;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
