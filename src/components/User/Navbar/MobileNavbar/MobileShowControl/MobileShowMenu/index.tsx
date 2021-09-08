import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { navbarMenu } from "../../../../../../data/navbar";
import { AuthContext } from "../../../../../../contexts/AuthCtx";
import { useLogOut } from "../../../../../../hooks/useGQLAuth";
import { UserNavCtx } from "../../../../../../contexts/UserNavCtx";
import IconsControl from "../../../../../IconsControl";
import DropdownControl from "./DropdownControl";
import * as El from "./MobileShowMenuElement";

const MobileShowMenu = () => {
  const { pathname } = useRouter();
  const { dispatch } = useContext(UserNavCtx);
  const [showDropdown, setShowDropdown] = useState<string>(null);
  const { logOut } = useLogOut();
  const { user } = useContext(AuthContext);
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
    <El.Main
      initial={{ y: "-100vh" }}
      animate={{ y: 0 }}
      exit={{ y: "-100vh" }}
      transition={{ type: "tween", delay: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <El.AuthMenu>
        {user && (
          <El.Account>
            <div>
              <El.PhotoWrapper>
                <Image
                  src={`${process.env.NEXT_PUBLIC_GQL_HTTP_URL}${userPic}`}
                  alt="Profile Pic"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  quality={50}
                  onError={() => defaultImgSrc()}
                />
              </El.PhotoWrapper>
              <El.UserInfo>
                <El.FullName>{user.fullName}</El.FullName>
                <El.Email>{user.email}</El.Email>
              </El.UserInfo>
            </div>
            <div>
              <El.NLink href="/u/my-account">
                <El.Anchor onClick={() => dispatch({ type: "CLOSE_MENU" })}>
                  My Account
                </El.Anchor>
              </El.NLink>
              <El.Anchor
                onClick={() => {
                  dispatch({ type: "CLOSE_MENU" });
                  logOut();
                }}
              >
                Logout
              </El.Anchor>
            </div>
          </El.Account>
        )}
        {!user && (
          <El.NoAccount>
            <El.NLink href="/auth/signin">
              <El.Anchor
                onClick={() => {
                  dispatch({ type: "CLOSE_MENU" });
                }}
              >
                Signin
              </El.Anchor>
            </El.NLink>
          </El.NoAccount>
        )}
      </El.AuthMenu>
      <El.Ul>
        {navbarMenu.map((value) => (
          <El.Li key={value.name}>
            {value.type === "link" && (
              <El.NLink href={value.link}>
                <El.Anchor
                  active={pathname === value.link ? true : false}
                  onClick={() => dispatch({ type: "CLOSE_MENU" })}
                >
                  {value.name}
                </El.Anchor>
              </El.NLink>
            )}
            {value.type === "dropdown" && (
              <El.DropdownBtn
                active={pathname === value.link ? true : false}
                onClick={() => setShowDropdown(!showDropdown ? value.id : null)}
              >
                {value.name}
                <El.IconWrapper>{IconsControl("chevron-down")}</El.IconWrapper>
              </El.DropdownBtn>
            )}
            <DropdownControl
              name={value.name}
              active={showDropdown && showDropdown === value.id}
            />
          </El.Li>
        ))}
      </El.Ul>
    </El.Main>
  );
};

export default MobileShowMenu;
