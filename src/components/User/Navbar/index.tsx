import { FC, useContext } from "react";
import * as El from "./NavbarElement";
import { ThemeContext } from "../../../contexts/ThemeCtx";
import MenuList from "./MenuList";
import { AnimatePresence } from "framer-motion";
import MobileMenuBtn from "./MobileNavbar/MobileMenuBtn";
import { UserNavCtx } from "../../../contexts/UserNavCtx";
import MobileShowControl from "./MobileNavbar/MobileShowControl";

const Navbar: FC = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const { userNav, dispatch } = useContext(UserNavCtx);
  return (
    <El.Main onClick={() => dispatch({ type: "CLOSE_MENU" })}>
      <El.Nav>
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
        <AnimatePresence>
          {userNav.showMenu && <MobileShowControl name={userNav.showMenu} />}
        </AnimatePresence>
      </El.Nav>
      {children}
    </El.Main>
  );
};

export default Navbar;
