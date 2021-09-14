import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 5rem 5rem;
  font-family: "Poppins", sans-serif;
  background: ${({ theme }) => theme.background[1]};
  color: ${({ theme }) => theme.color[1]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    padding: 5rem 2rem 0.5rem 2rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 5rem 0.5rem 0.5rem 0.5rem;
  }
  transition: 0.4s all ease;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SectionTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 500;
`;
export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Section3 = styled.div``;

export const ItemGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
