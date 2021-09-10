import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 5rem 0;
  font-family: "Poppins", sans-serif;
  color: ${({ theme }) => theme.color[1]};
  padding: calc(2vw + 5em) calc(14vw - 3em) 0 calc(14vw - 3em);
  transition: 0.4s all ease;
`;

export const Section1 = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const SectionTitle = styled.h1`
  font-size: 1.1rem;
  font-weight: 500;
`;
export const Section2 = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const Section3 = styled.div``;

export const ItemGroup = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  overflow-x: auto;
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.v2.track};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v2.thumb};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v2.hover.thumb};
  }
`;
