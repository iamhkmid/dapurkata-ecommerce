import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
  overflow: hidden;
  background: ${({ theme }) => theme.background[2]};
  min-width: 80%;
  width: 90%;
  min-height: 70%;
  height: 90%;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    height: 100%;
    width: 100%;
  }
  transition: 0.4s all ease;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem 3rem 2rem;
  overflow-x: auto;
  .gap-border {
    border-bottom: 1px solid ${({ theme }) => theme.border[2]};
  }
  .short {
    max-width: 20%;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v1.thumb};
    border-radius: ${({ theme }) => theme.input.borderRadius};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
  }

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 1rem;
    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    flex-direction: column;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 1rem;
  }
`;

export const Content2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    gap: 1rem;
  }
`;

export const ActionBtn = styled.div`
  display: flex;
  gap: 1rem;
`;

export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;
export const Images = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  gap: 1rem;
  transition: 0.4s all ease;
`;

export const CoverWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 20px;
  min-height: 260px;
  min-width: 260px;
  aspect-ratio: 1/1;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.content.bookCard.cover.background};

  > div {
    display: flex;
    min-height: 220px;
    min-width: 150px;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: rgba(13, 18, 29, 0.158) 0px 1px 2px,
      rgba(13, 18, 29, 0.158) 0px 2px 4px, rgba(13, 18, 29, 0.158) 0px 4px 8px,
      rgba(13, 18, 29, 0.158) 0px 8px 16px,
      rgba(13, 18, 29, 0.158) 0px 16px 32px,
      rgba(13, 18, 29, 0.158) 0px 32px 64px;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    > div {
      min-height: 220px;
      min-width: 150px;
    }
    height: 100%;
    aspect-ratio: unset;
    width: 100%;
  }
  transition: 0.4s all ease;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  justify-content: space-between;
  transition: 0.4s all ease;
`;
export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  padding-bottom: 1rem;
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1.2rem;
    }
  }
  .author {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.9rem;
    }
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  .price {
    font-family: "Mulish", sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    color: ${({ theme }) => theme.color[3]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 1.2rem;
    }
  }
`;

export const CartBtn = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .section-name {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.button.section.color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.9rem;
    }
  }
  .category {
    display: grid;
    width: 100%;
    max-width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(6rem, auto));
    grid-gap: 8px 2%;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      grid-template-columns: repeat(1fr, minmax(5rem, 1fr));
    }
    > div {
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 0.5rem 1rem;
      font-size: 0.8rem;
      font-weight: 500;
      align-items: center;
      overflow: hidden;
      min-width: max-content;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      background: ${({ theme }) => theme.button.list.background};
      color: ${({ theme }) => theme.button.list.color};
      :hover {
        background: ${({ theme }) => theme.button.hover.list.background};
        color: ${({ theme }) => theme.button.hover.list.color};
      }
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 0.7rem;
        padding: 0.2rem 0.5rem;
      }
      transition: 0.4s all ease;
    }
  }
`;

export const AdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  .section-name {
    font-size: 1rem;
    font-weight: 600;
    color: ${({ theme }) => theme.button.section.color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.9rem;
    }
  }
  .info-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 16px;
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      gap: 8px;
    }

    > div {
      border-radius: ${({ theme }) => theme.borderRadius};
      padding: 0.3rem 1rem;
      overflow: hidden;
      min-width: 7rem;
      display: flex;
      flex-direction: column;
      background: ${({ theme }) => theme.button.list.background};
      color: ${({ theme }) => theme.button.list.color};
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        flex-grow: 1;
      }
      .ai-name {
        font-size: 0.9rem;
        font-weight: 500;
        @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
          font-size: 0.7rem;
        }
      }
      .ai-value {
        font-family: "Mulish", sans-serif;
        font-size: 0.9rem;
        font-weight: 400;
        @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
          font-size: 0.7rem;
        }
      }
    }
  }
`;

export const AboutBook = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 1rem;
  .section-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.button.section.color};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.9rem;
    }
  }
  .description {
    font-family: "Mulish", sans-serif;
    font-size: 1rem;
    text-align: justify;
    font-weight: 400;
    color: ${({ theme }) => theme.color[2]};
    max-height: 15rem;
    padding: 0 0.4rem;
    overflow-x: auto;
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ::-webkit-scrollbar-track {
      background: transparent;
    }

    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.scrollbar.v1.thumb};
      border-radius: ${({ theme }) => theme.input.borderRadius};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.scrollbar.v1.hover.thumb};
    }
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 0.9rem;
      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
    }
  }
`;
