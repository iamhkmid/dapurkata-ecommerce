import api from "../api";
import { Request, Response } from "express";
import { ExecutionParams } from "subscriptions-transport-ws";
import { db } from "../db";
import { TCtx } from "../../types/gContext";
import { PubSub } from "graphql-subscriptions";

type TParamsCtx = {
  req: Request;
  res: Response;
  connection: ExecutionParams;
};
type TContext = (params: TParamsCtx) => Promise<TCtx>;

const pubsub = new PubSub();
const context: TContext = async ({ req, res, connection }) => {
  return { api, req, res, db, pubsub };
};

export default context;
