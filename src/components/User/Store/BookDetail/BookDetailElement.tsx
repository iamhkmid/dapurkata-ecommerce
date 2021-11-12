import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled(motion.div)`
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  position: relative;
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
  margin-top: 2rem;
  padding: 1rem 2rem 3rem 2rem;
  overflow-x: auto;
  .gap-border {
    border-bottom: 2px solid ${({ theme }) => theme.border[2]};
    border-style: dashed;
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
  gap: 5px;
  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-height: 1;
    overflow: hidden;
    font-size: 28px;
    font-weight: 700;
    color: ${({ theme }) => theme.color[1]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 20px;
    }
  }
  .author {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-height: 1;
    overflow: hidden;
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.color[2]};
    @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
      font-size: 14px;
    }
  }
  .cover-type {
    display: flex;
    width: max-content;
    padding: 1px 8px;
    border-radius: 10px;
    background: ${({ theme }) => theme.button.primary.background};
    h1 {
      font-size: 12px;
      color: ${({ theme }) => theme.button.primary.color};
      font-weight: 600;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 10px;
      }
    }
  }
  .empty-stock {
    display: flex;
    width: max-content;
    padding: 1px 8px;
    border-radius: 10px;
    background: ${({ theme }) => theme.button.warning.background};
    h1 {
      font-size: 14px;
      color: ${({ theme }) => theme.button.warning.color};
      font-weight: 600;
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 12px;
      }
    }
  }
`;

export const OrderInfo = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  .price {
    display: flex;
    font-family: "Mulish", sans-serif;
    flex-direction: column;
    gap: 2px;
    .normal-price-wrapper {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    .discount {
      font-family: "Poppins", sans-serif;
      font-size: 12px;
      padding: 2px 4px;
      font-weight: 600;
      background: ${({ theme }) => theme.button.success.background};
      color: ${({ theme }) => theme.button.success.color};
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 10px;
      }
    }
    .normal-price {
      font-size: 16px;
      text-decoration: line-through;
      line-height: 1;
      font-weight: 800;
      color: ${({ theme }) => theme.color[9]};
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 14px;
      }
    }
    .discount-price {
      font-size: 27px;
      line-height: 1;
      font-weight: 900;
      color: ${({ theme }) => theme.color[3]};
      @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
        font-size: 22px;
      }
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
      .capitalize {
        text-transform: capitalize;
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
