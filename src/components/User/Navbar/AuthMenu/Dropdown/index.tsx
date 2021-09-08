import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../contexts/AuthCtx";
import { useLogOut } from "../../../../../hooks/useGQLAuth";
import { UserNavCtx } from "../../../../../contexts/UserNavCtx";
import * as El from "./DropdownElement";

const Dropdown = () => {
  const { logOut } = useLogOut();
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(UserNavCtx);
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <El.UserInfo>
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
        <El.FullName>{`${user.firstName} ${user.lastName}`}</El.FullName>
        <El.Email>{user.email}</El.Email>
      </El.UserInfo>
      <El.Ul onClick={() => dispatch({ type: "CLOSE_MENU" })}>
        <El.Li>
          <El.NLink href="/">
            <El.Anchor>My Profile</El.Anchor>
          </El.NLink>
        </El.Li>
        {user.role === "ADMIN" && (
          <El.Li>
            <El.NLink href="/admin">
              <El.Anchor>Adminpage</El.Anchor>
            </El.NLink>
          </El.Li>
        )}
        <El.Li onClick={async () => await logOut()}>
          <El.Item>Sign out</El.Item>
        </El.Li>
      </El.Ul>
    </El.Main>
  );
};

export default Dropdown;
