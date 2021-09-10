import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  padding-top: 5.5rem;
  padding-bottom: 1rem;
  height: 100vh;
  justify-content: center;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  gap: 0.5rem;
  height: 100%;
`;

export const PageInfo = styled.div`
  display: flex;
`;
export const TextInfo = styled.div`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  > h1.navigation {
    font-size: 0.9rem;
    font-weight: 300;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1rem;
    }
    transition: 0.4s all ease;
  }
  > h1.state {
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.9rem;
    }
    transition: 0.4s all ease;
  }
`;
