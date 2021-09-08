import styled, { css } from "styled-components";
import LinkN from "next/link";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: 100vh;
  background: ${({ theme }) => theme.body.background};
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.scrollbar.v2.thumb};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.scrollbar.v2.hover.thumb};
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    ::-webkit-scrollbar {
      width: 5px;
    }
  }
  transition: 0.4s all ease;
  transition-property: background;
`;

export const Nav = styled.nav`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  width: 100vw;
  z-index: 10;
  transition: 0.4s all ease;
  transition-property: background-color, border-color;
`;

export const NavbarContainer = styled.div`
  background: ${({ theme }) => theme.section.background};
  box-shadow: ${({ theme }) => theme.section.boxShadow};
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding: 0 calc(13vw - 2em);
  width: 100%;
  z-index: 12;
  position: relative;
  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    padding: 0 3rem;
  }
  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    padding: 0 1rem;
  }
`;

export const LogoLink = styled(LinkN)`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-self: flex-start;
`;

export const Logo = styled.img`
  height: 2.5rem;

  @media screen and (max-width: ${({ theme: { screen } }) => screen.md}) {
    height: 2.3rem;
  }

  @media screen and (max-width: ${({ theme: { screen } }) => screen.sm}) {
    height: 1.8rem;
  }
`;
