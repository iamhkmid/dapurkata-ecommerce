import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { navbarMenu } from "../../../../data/navbar";
import { AuthContext } from "../../../../contexts/AuthCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import ThemeToggle from "../../../otherComps/Buttons/ThemeToggle";
import IconsControl from "../../../IconsControl";
import AuthMenu from "../AuthMenu";
import DropdownControl from "./DropdownControl";
import * as El from "./MenuLIstElement";
import { TUserMenu } from "../../../../types/context";
import { ShoppingCartCtx } from "../../../../contexts/ShoppingCartCtx";

const MenuList = () => {
  const { pathname } = useRouter();
  const { userNav, dispatch } = useContext(UserNavCtx);
  return (
    <El.Main>
      <El.Ul>
        {navbarMenu.map((value) => (
          <El.Li key={value.name}>
            {value.type === "link" && (
              <El.NLink href={value.link}>
                <El.Anchor active={pathname === value.link}>
                  {value.name}
                  <El.ActiveLine className="active-line" />
                </El.Anchor>
              </El.NLink>
            )}
            {value.type === "dropdown" && (
              <El.DropdownBtn
                active={pathname === value.link}
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({
                    type: "SHOW_MENU",
                    value: "SERVICES" as TUserMenu,
                  });
                }}
              >
                <El.ActiveLine className="active-line" />
                <El.DropdownName>{value.name}</El.DropdownName>
                <El.IconWrapper>
                  {IconsControl("chevron-down-outline")}
                </El.IconWrapper>
                <AnimatePresence>
                  {userNav.menu === value.id && (
                    <DropdownControl name={value.id} />
                  )}
                </AnimatePresence>
              </El.DropdownBtn>
            )}
          </El.Li>
        ))}
      </El.Ul>
    </El.Main>
  );
};

export default MenuList;
