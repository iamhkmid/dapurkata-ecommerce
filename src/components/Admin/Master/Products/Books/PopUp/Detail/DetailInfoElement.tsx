import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1.5rem;
  max-width: 80vmax;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.h1`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.input.label};

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 0.8rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
  transition: 0.4s all ease;
`;
export const Value = styled.h1`
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  max-height: 10rem;
  overflow-y: auto;
  color: ${({ theme }) => theme.input.label};

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.scrollbar.v1.track};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    font-size: 1rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.9rem;
  }
  transition: 0.4s all ease;
`;
export const Category = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 0.8rem;
  display: flex;
  padding: 0.2rem 0.5rem;
  border-radius: 5px;
  background: ${({ theme }) => theme.button.primary.background};
  color: ${({ theme }) => theme.button.primary.color};
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.7rem;
  }
  transition: 0.4s all ease;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 10rem;
  max-width: fit-content;
  padding: 0.5rem 0;
  gap: 0.3rem;
  flex-wrap: wrap;
`;

export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 15rem;
  width: 10rem;
`;
