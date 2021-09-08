import styled from "styled-components";

export const NumberColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const DefaultColumn = styled.div``;
export const ActionColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0;
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 10rem;
  max-width: fit-content;
  gap: 0.3rem;
  flex-wrap: wrap;
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

export const Title = styled.div`
  min-width: 15rem;
`;
