import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { signinBtn } from "../../../../data/navbar";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { ThemeContext } from "../../../../contexts/ThemeCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import IconsControl from "../../../IconsControl";
import UserLoading from "../../../otherComps/Loading/EllipsisLoading";
import * as El from "./AuthMenuElement";
import Dropdown from "./Dropdown";
import Loading2 from "../../../otherComps/Loading/Loading2";
import ImageResponsive from "../../../otherComps/ImageResponsive";

const AuthMenu = () => {
  const { user, loading } = useContext(AuthContext);
  const { userNav, dispatch } = useContext(UserNavCtx);
  const { pathname } = useRouter();

  return (
    <El.Main>
      {loading && <Loading2 />}
      {!user && !loading && (
        <El.NLink href={signinBtn.link[0]}>
          <El.Anchor active={signinBtn.link.includes(pathname)}>
            <El.ActiveLine className="active-line" />
            <El.MenuIconWrapper>{IconsControl("Signin")}</El.MenuIconWrapper>
            {signinBtn.name}
          </El.Anchor>
        </El.NLink>
      )}
      {user && !loading && (
        <El.AuthMenuContainer onClick={(e) => e.stopPropagation()}>
          <El.AccountBtn
            onClick={() => dispatch({ type: "SHOW_MENU", value: "MENU" })}
            active={userNav.showMenu === "MENU"}
          >
            <El.PhotoWrapper className="profile">
              <ImageResponsive
                src={user?.userPicture}
                alt="Profile Pic"
                height={40}
                width={40}
                defaultIcon="person"
                quality={75}
              />
            </El.PhotoWrapper>
            <El.MenuIconWrapper>
              {IconsControl("chevron-down-outline")}
            </El.MenuIconWrapper>
            <AnimatePresence>
              {userNav.showMenu === "MENU" && <Dropdown />}
            </AnimatePresence>
          </El.AccountBtn>
        </El.AuthMenuContainer>
      )}
    </El.Main>
  );
};

export default AuthMenu;
