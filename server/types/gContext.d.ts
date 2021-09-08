import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { TAPI } from "./api";
import { TUserCtx } from "./user";

export type TDB = PrismaClient<
  Prisma.PrismaClientOptions,
  never,
  Prisma.RejectOnNotFound | Prisma.RejectPerOperation
>;

type TCtx = {
  req: Request;
  res: Response;
  user?: TUserCtx;
  api: TAPI;
  db: TDB;
};
type TDecoded = {
  id: string;
  role: string;
  iat: Date;
  exp: Date;
};
