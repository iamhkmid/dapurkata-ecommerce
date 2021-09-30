import { FC, useContext, useEffect, useState } from "react";
import * as El from "./NavbarElement";
import { ThemeContext } from "../../../contexts/ThemeCtx";
import MenuList from "./MenuList";
import { AnimatePresence } from "framer-motion";
import MobileMenuBtn from "./MobileNavbar/MobileMenuBtn";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import MobileShowControl from "./MobileNavbar/MobileShowControl";
import { useRef } from "react";
import GlobalMessageUser from "../../otherComps/GlobalMessage/GlobalMessageUser";
import { useRouter } from "next/router";
import Link from "next/link";
import ThemeToggle from "../../otherComps/Buttons/ThemeToggle";
import AuthMenu from "./AuthMenu";
import { useWindowSize } from "react-use";
import IconsControl from "../../IconsControl";

const Navbar: FC = ({ children }) => {
  const { pathname } = useRouter();
  const { theme } = useContext(ThemeContext);
  const { userNav, dispatch } = useContext(UserNavCtx);
  const mainRef = useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = useState(true);
  const [showColor, setShowColor] = useState(true);
  const [showLogo, setShowLogo] = useState(true);
  const [scroll, setScroll] = useState(0);
  const { width } = useWindowSize();

  useEffect(() => {
    if (process.browser) {
      mainRef.current.onscroll = (e) => {
        if (pathname !== "/") {
          setShowColor(true);
        } else if (mainRef.current.scrollTop > 32) {
          setShowColor(true);
        } else {
          setShowColor(false);
        }

        if (pathname !== "/" || width < 960) {
          setShowLogo(true);
        } else if (mainRef.current.scrollTop > 96) {
          setShowLogo(true);
        } else {
          setShowLogo(false);
        }
        // if (
        //   scroll < mainRef.current.scrollTop &&
        //   mainRef.current.offsetHeight + mainRef.current.scrollTop >=
        //     mainRef.current.offsetHeight + 64
        // ) {
        //   setShowNav(false);
        // } else {
        //   setShowNav(true);
        // }
        // setScroll(mainRef.current.scrollTop);
      };
    }
  }, [scroll, pathname]);

  useEffect(() => {
    if (process.browser) {
      if (pathname === "/" && mainRef.current.scrollTop <= 32) {
        setShowColor(false);
      } else {
        setShowColor(true);
      }
      if (pathname === "/" && width > 960) {
        setShowLogo(false);
      } else {
        setShowLogo(true);
      }
    }
  }, [pathname, width]);

  return (
    <El.Main onClick={() => dispatch({ type: "CLOSE_MENU" })} ref={mainRef}>
      <El.Nav showNav={showNav}>
        <El.NavbarContainer showColor={showColor}>
          <El.LogoLink>
            <Link href="/">
              <a>
                <El.Logo>{IconsControl("navbar_logo")}</El.Logo>
                <El.LogoText showLogo={showLogo}>
                  <h1>Penerbit</h1>
                  <h1>Dapurkata</h1>
                </El.LogoText>
              </a>
            </Link>
          </El.LogoLink>

          <El.MenuWrapper>
            <MenuList />
            <AuthMenu />
          </El.MenuWrapper>
          <MobileMenuBtn />
        </El.NavbarContainer>
        {!userNav.popup.name && <GlobalMessageUser />}
        <AnimatePresence>
          {userNav.menu && (
            <El.MobileWrapper>
              <MobileShowControl name={userNav.menu} />
            </El.MobileWrapper>
          )}
        </AnimatePresence>
      </El.Nav>
      {children}
    </El.Main>
  );
};

export default Navbar;
