import { useRouter } from "next/router";
import { FC, useContext } from "react";
import { AdminNavCtx } from "../../../../../../contexts/AdminNavCtx";
import Button from "../../../../../otherComps/Buttons/Button";
import ButtonBase from "../../../../../otherComps/Buttons/ButtonBase";
import ImageResponsive from "../../../../../otherComps/ImageResponsive";
import PopUpHeaderAdmin from "../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";
import { useGQLUserDetail } from "../../useGQLUser";
import ActionDetail from "./ActionDetail";
import * as El from "./DetailElement";
import ProfileInfo from "./ProfileInfo";

type TUserDetail = {
  userId: string;
  nested?: boolean;
};

const BookDetail: FC<TUserDetail> = ({ userId, nested }) => {
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin
        title="Detail Pengguna"
        closePopup={nested ? "CURRENT" : "ALL"}
        themeToggle={true}
      />
      <El.ContentWrapper>
        <El.Content>
          <ProfileInfo userId={userId} />
          <ActionDetail userId={userId} />
        </El.Content>
      </El.ContentWrapper>
    </El.Main>
  );
};

export default BookDetail;
