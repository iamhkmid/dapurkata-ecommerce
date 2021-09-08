import { AuthenticationError } from "apollo-server-express";
import { Request } from "express";
import jwt from "jsonwebtoken";
import { TDB } from "../../../../types/gContext";
import { TUserCtx } from "../../../../types/user";

type TCheckRole = (p: { requires: string; role: string }) => void;

const checkRole: TCheckRole = ({ requires, role }) => {
  if (requires === "AUTH" && !(role === "ADMIN" || role === "USER")) {
    throw new AuthenticationError("Authentication is required");
  } else if (requires === "ADMIN" && role !== "ADMIN") {
    throw new AuthenticationError("Role authentication is not correct");
  } else if (requires === "USER" && role !== "USER") {
    throw new AuthenticationError("Role authentication is not correct");
  }
};

type TAuthD = (p: {
  db: TDB;
  req: Request;
  requires: string;
}) => Promise<{ user: TUserCtx }>;

const authDirective: TAuthD = async (props) => {
  const { db, req, requires } = props;

  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];
  if (!!token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const findUser = await db.user.findUnique({
        where: { id: decoded["id"] },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          username: true,
          role: true,
          phone: true,
        },
      });
      if (!!findUser) {
        checkRole({ requires, role: findUser.role });
        return { user: findUser };
      } else {
        throw new AuthenticationError("User not found");
      }
    } catch (error) {
      throw error;
    }
  } else {
    throw new AuthenticationError("Authentication is required");
  }
};

export default authDirective;
