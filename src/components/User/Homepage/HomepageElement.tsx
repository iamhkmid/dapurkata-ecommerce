import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

type TSection = {
  currTheme: string;
};
export const Main = styled.div<TSection>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Poppins", sans-serif;
`;

type TSc1 = { bgUrl: string };
export const Section1 = styled.div<TSc1>`
  display: flex;
  background: ${({ theme }) => theme.background[2]};
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 3rem;
  width: 100%;
  overflow: hidden;
  padding-top: 6rem;
  padding-bottom: 1rem;

  background-image: url(${({ bgUrl }) => bgUrl});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  /* ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    backdrop-filter: blur(1px);
  } */

  transition: 0.4s all ease;
`;

export const GroupText = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
  flex-direction: column;
`;

export const Text1 = styled(motion.h1)`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color[1]};
  text-align: center;
  font-weight: 600;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 1.2rem;
  }
`;
export const Text2 = styled(motion.h1)`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color[1]};
  text-align: center;
  font-weight: 400;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 1rem;
  }
`;
export const Text3 = styled.h1`
  font-size: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.color[1]};

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    font-size: 0.9rem;
  }
`;

export const ImageContainer = styled(motion.div)`
  display: block;
  align-items: center;
  position: relative;
  height: 300px;
  aspect-ratio: 5/3;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    height: 250px;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    height: 150px;
  }
`;

export const Background = styled.div`
  display: block;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 0;
  top: 0;
  left: 0;
  > div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export const ButtonWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  .button-home {
    display: flex;
    gap: 2rem;
    > button {
      border-radius: 100px;
    }
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    gap: 1rem;
  }
`;

export const Section2 = styled.div`
  display: flex;
  background: ${({ theme }) => theme.background[1]};
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 3rem;
  width: 100%;
  padding-top: 6rem;
  padding-bottom: 3rem;
  /* ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    backdrop-filter: blur(1px);
  } */

  transition: 0.4s all ease;
`;

const animateDown = keyframes`
0%,20%,50%,80%,100%{
  transform:translateY(0)
}
40%{
  transform:translateY(5px)
}
60%{
  transform:translateY(3px)
}
`;
export const ChevronDown = styled(motion.div)`
  display: flex;
  > svg {
    color: ${({ theme }) => theme.color[2]};
    height: 2rem;
    stroke-width: 55;
  }
  animation: ${animateDown} infinite 1.5s;
`;
