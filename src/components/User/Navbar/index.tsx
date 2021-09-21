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

const Navbar: FC = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const { userNav, dispatch } = useContext(UserNavCtx);
  const mainRef = useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = useState(true);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (process.browser) {
      mainRef.current.onscroll = (e) => {
        if (
          scroll < mainRef.current.scrollTop &&
          mainRef.current.offsetHeight + mainRef.current.scrollTop >=
            mainRef.current.offsetHeight + 64
        ) {
          setShowNav(false);
        } else {
          setShowNav(true);
        }
        setScroll(mainRef.current.scrollTop);
      };
    }
  }, [scroll]);

  return (
    <El.Main onClick={() => dispatch({ type: "CLOSE_MENU" })} ref={mainRef}>
      <El.Nav showNav={showNav}>
        <El.NavbarContainer>
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
          {userNav.menu && <MobileShowControl name={userNav.menu} />}
        </AnimatePresence>
      </El.Nav>
      {children}
    </El.Main>
  );
};

export default Navbar;
