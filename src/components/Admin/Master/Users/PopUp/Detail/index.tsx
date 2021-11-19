import { FC } from "react";
import PopUpHeaderAdmin from "../../../../../otherComps/PopUpHeader/PopUpHeaderAdmin";
import * as El from "./DetailElement";

type TUserDetail = {
  userId: string;
};

const BookDetail: FC<TUserDetail> = ({ userId }) => {
  return (
    <El.Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PopUpHeaderAdmin title="Detail Pengguna" />
    </El.Main>
  );
};

export default BookDetail;
