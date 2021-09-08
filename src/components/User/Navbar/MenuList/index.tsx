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
  const { user } = useContext(AuthContext);
  const { shoppingCart } = useContext(ShoppingCartCtx);
  const { pathname } = useRouter();
  const [totalItems, setTotalItems] = useState(0);
  const { userNav, dispatch } = useContext(UserNavCtx);
  useEffect(() => {
    const total = shoppingCart.data.reduce((acc, curr) => acc + curr.amount, 0);
    setTotalItems(total);
  }, [shoppingCart]);
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
                <El.IconWrapper>{IconsControl("chevron-down")}</El.IconWrapper>
                <AnimatePresence>
                  {userNav.showMenu === value.id && (
                    <DropdownControl name={value.id} />
                  )}
                </AnimatePresence>
              </El.DropdownBtn>
            )}
          </El.Li>
        ))}
      </El.Ul>
      {user && user.role === "USER" && (
        <El.IconGroup onClick={(e) => e.stopPropagation()}>
          {["CART", "MAIL"].map((value) => (
            <El.IconButton
              key={value}
              active={userNav.showMenu === value}
              onClick={() =>
                dispatch({ type: "SHOW_MENU", value: value as TUserMenu })
              }
            >
              {IconsControl(value)}
              {value === "CART" && totalItems > 0 && (
                <El.AmountNum>{totalItems}</El.AmountNum>
              )}
              <AnimatePresence>
                {userNav.showMenu === value && <DropdownControl name={value} />}
              </AnimatePresence>
            </El.IconButton>
          ))}
        </El.IconGroup>
      )}
      <ThemeToggle />
      <AuthMenu />
    </El.Main>
  );
};

export default MenuList;
