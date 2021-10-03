import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { PubSub } from "graphql-subscriptions";
import NodeCache from "node-cache";
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
  pubsub: PubSub;
  cache: NodeCache;
};
type TDecoded = {
  id: string;
  role: string;
  iat: Date;
  exp: Date;
};
