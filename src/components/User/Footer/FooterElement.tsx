import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
  box-shadow: ${({ theme }) => theme.boxShadow};
  z-index: 1;
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 1rem;
  padding: 3rem;
  background: ${({ theme }) => theme.background[2]};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    padding: 2rem 2rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 2rem 1rem;
  }
  transition: 0.4s all ease;
`;

export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > h1 :nth-child(1) {
    color: ${({ theme }) => theme.color[2]};
    font-size: 1.2rem;
    font-weight: 600;
  }
  > h1 :nth-child(2) {
    color: ${({ theme }) => theme.color[1]};
    font-size: 0.9rem;
  }
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > h1 :nth-child(1) {
    color: ${({ theme }) => theme.color[2]};
    font-size: 1.2rem;
    font-weight: 600;
  }
  > h1 :nth-child(2) {
    color: ${({ theme }) => theme.color[1]};
    font-size: 0.9rem;
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > h1 :nth-child(1) {
    color: ${({ theme }) => theme.color[2]};
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const FooterMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: ${({ theme }) => theme.background[3]};
  > h1 {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color[4]};
  }
`;
