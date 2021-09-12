import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
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

const AuthMenu = () => {
  const { user, loading } = useContext(AuthContext);
  const { userNav, dispatch } = useContext(UserNavCtx);
  const { pathname } = useRouter();
  const defUserPic = `/uploads/profile/default/defProfilePic.svg`;
  const [userPic, setUserPic] = useState(defUserPic);
  const defaultImgSrc = () => {
    setUserPic(defUserPic);
  };
  useEffect(() => {
    if (user?.UserPicture) {
      if (user.UserPicture.url) setUserPic(user.UserPicture.url);
    }
  }, [user]);

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
              <Image
                src={`${process.env.NEXT_PUBLIC_GQL_HTTP_URL}${userPic}`}
                alt="Profile Pic"
                layout="fixed"
                height={40}
                width={40}
                quality={75}
                onError={() => defaultImgSrc()}
              />
            </El.PhotoWrapper>
            <El.MenuIconWrapper>
              {IconsControl("chevron-down")}
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
