import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.sidebar.border};
  margin-bottom: 0.5rem;
`;

export const PageInfo = styled.div`
  display: flex;
`;
export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  > h1.title {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.section.color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1rem;
    }
    transition: 0.4s all ease;
  }
  > h1.desc {
    font-size: 0.9rem;
    font-weight: 400;
    color: ${({ theme }) => theme.section.color2};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.9rem;
    }
    transition: 0.4s all ease;
  }
`;
export const IconWrapper = styled.div`
  aspect-ratio: 1/1;
  align-items: center;
  border-radius: ${({ theme }) => theme.section.borderRadius};
  justify-content: center;
  margin-right: 0.5rem;
  padding: 0.2rem;
  background: ${({ theme }) => theme.sidebar.iconPage.background};
  color: ${({ theme }) => theme.sidebar.iconPage.color};
  > svg {
    height: 2rem;
    stroke-width: 1.5px;
  }
  transition: 0.4s all ease;
`;
