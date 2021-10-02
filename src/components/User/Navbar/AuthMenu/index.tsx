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
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";
import { TUserMenu } from "../../../../types/context";
import DropdownControl from "../MenuList/DropdownControl";
import ThemeToggle from "../../../otherComps/Buttons/ThemeToggle";

const AuthMenu = () => {
  const { user, loading } = useContext(AuthContext);
  const { userNav, dispatch } = useContext(UserNavCtx);
  const { pathname } = useRouter();

  const { shoppingCart } = useContext(ShoppingCartCtx);
  const [totalItems, setTotalItems] = useState(0);
  useEffect(() => {
    const total = shoppingCart.data.reduce((acc, curr) => acc + curr.amount, 0);
    setTotalItems(total);
  }, [shoppingCart]);
  const spring = {
    type: "spring",
    stiffness: 300,
    damping: 40,
  };
  return (
    <El.Main>
      {loading && <Loading2 />}
      {user && user.role === "USER" && (
        <El.IconGroup onClick={(e) => e.stopPropagation()}>
          {["CART", "MAIL"].map((value) => (
            <El.IconButton
              key={value}
              active={userNav.menu === value}
              onClick={() =>
                dispatch({ type: "SHOW_MENU", value: value as TUserMenu })
              }
            >
              {IconsControl(value)}
              {value === "CART" && totalItems > 0 && (
                <El.AmountNum>{totalItems}</El.AmountNum>
              )}
              <AnimatePresence>
                {userNav.menu === value && <DropdownControl name={value} />}
              </AnimatePresence>
            </El.IconButton>
          ))}
        </El.IconGroup>
      )}
      <ThemeToggle />
      {!user && !loading && (
        <El.NLink href={signinBtn.link[0]} scroll={false}>
          <El.Anchor
            active={signinBtn.link.includes(pathname)}
            onMouseEnter={() =>
              dispatch({ type: "CHANGE_NAV_MENU", menu: "/auth/signin" })
            }
          >
            {signinBtn.link.includes(userNav.selectedNavMenu) && (
              <El.ActiveLine
                className="active-line"
                layoutId="menu_bg"
                initial={false}
                transition={spring}
              />
            )}
            <El.MenuIconWrapper>{IconsControl("Signin")}</El.MenuIconWrapper>
            {signinBtn.name}
          </El.Anchor>
        </El.NLink>
      )}
      {user && !loading && (
        <El.AuthMenuContainer onClick={(e) => e.stopPropagation()}>
          <El.AccountBtn
            onClick={() => dispatch({ type: "SHOW_MENU", value: "MENU" })}
            active={userNav.menu === "MENU"}
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
              {userNav.menu === "MENU" && <Dropdown />}
            </AnimatePresence>
          </El.AccountBtn>
        </El.AuthMenuContainer>
      )}
    </El.Main>
  );
};

export default AuthMenu;
