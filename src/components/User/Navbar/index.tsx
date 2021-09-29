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

const Navbar: FC = ({ children }) => {
  const { pathname } = useRouter();
  const { theme } = useContext(ThemeContext);
  const { userNav, dispatch } = useContext(UserNavCtx);
  const mainRef = useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = useState(true);
  const [showColor, setShowColor] = useState(true);
  const [scroll, setScroll] = useState(0);

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
    if (pathname === "/") {
      setShowColor(false);
    } else {
      setShowColor(true);
    }
  }, [pathname]);

  return (
    <El.Main onClick={() => dispatch({ type: "CLOSE_MENU" })} ref={mainRef}>
      <El.Nav showNav={showNav}>
        <El.NavbarContainer showColor={showColor}>
          <El.LogoLink href="/">
            <a>
              <El.Logo
                src={
                  theme === "light"
                    ? "/icons/logo_light.svg"
                    : "/icons/logo_dark.svg"
                }
                alt="logo"
              ></El.Logo>
            </a>
          </El.LogoLink>
          <MenuList />
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
