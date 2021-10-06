import jwt from "jsonwebtoken";
import moment from "moment";

export const createToken = ({ id, role }) => {
  const maxAge = 1 * 24 * 60 * 60;
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

export const genConfirmCode = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

type TConfirmCodeTemp = {
  confirmCode: string;
  expirationTime: Date;
};
export const confirmCodeTemp = (props: TConfirmCodeTemp) => {
  const { confirmCode, expirationTime } = props;
  return `
  <div style="width:100%;margin:0;">
    <div style="display:inline-block;text-align:center;padding:10px 20px;width:100%;background-color:#f1f2f3;padding:30px 0;">
      <div style="display:inline-block;text-align:center;margin-top:20px;">
        <h1 style="font-size:14px;padding:0;margin:0;font-weight:400;">
          KODE KONFIRMASI
        </h1>
        <h1 style="background-color:#dadfe1;font-size:25px;font-weight:700;padding:5px 30px;width:fit-content;margin:0;">
          ${confirmCode}
        </h1>
      </div>
      <h1 style="font-size:14px;font-weight:400;padding:0;margin:10px 0 0 0;">
        Dapat digunakan sampai : ${moment(expirationTime)
          .local()
          .format("DD-MM-YYYY HH:mm.ss")}
      </h1>
      <h1 style="font-size:12px;font-weight:400;padding:0;margin:30px 0 0 0;">
        Penerbit DapurKata © 2021 ~ Made with ❤️
      </h1>
    </div>
  </div>`;
};
