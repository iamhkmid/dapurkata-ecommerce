import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  margin-top: 5rem;
  padding: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0.2rem;
  }
  transition: 0.4s all ease;
`;

export const Delivery = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.section.background};
  color: ${({ theme }) => theme.section.color};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  border-radius: ${({ theme }) => theme.section.borderRadius};
  min-width: 30rem;
  max-width: 40rem;
  overflow: hidden;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
    min-width: 100%;
  }
  transition: 0.4s all ease;
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.section.background};
  color: ${({ theme }) => theme.section.color};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  border-radius: ${({ theme }) => theme.section.borderRadius};
  min-width: 27rem;
  max-width: 27rem;
  overflow: hidden;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    width: 100%;
    min-width: 100%;
  }
  transition: 0.4s all ease;
`;

export const SectionHead = styled.div`
  display: flex;
  height: fit-content;
  color: ${({ theme }) => theme.button.primary.background};
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.section.border};
  transition: 0.4s all ease;
`;
export const SectionName = styled.h1`
  font-size: 1.1rem;
  text-transform: uppercase;
  font-weight: 500;
  padding: 0.3rem 1rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 1rem;
  }
  transition: 0.4s all ease;
`;
