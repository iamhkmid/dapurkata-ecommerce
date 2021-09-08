import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createToken = ({ id, role }) => {
  const maxAge = 1 * 24 * 60 * 60;
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: maxAge,
  });
};

type TCheckPassword = { password: string; DbPassword: string };
export const checkPassword = async ({ password, DbPassword }: TCheckPassword) =>
  await bcrypt.compare(password, DbPassword);
