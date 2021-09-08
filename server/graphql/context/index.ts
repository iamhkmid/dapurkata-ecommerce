import api from "../api";
import { Request, Response } from "express";
import { ExecutionParams } from "subscriptions-transport-ws";
import { db } from "../db";
import { TCtx } from "../../types/gContext";

type TParamsCtx = {
  req: Request;
  res: Response;
  connection: ExecutionParams;
};
type TContext = (params: TParamsCtx) => Promise<TCtx>;
const context: TContext = async ({ req, res, connection }) => {
  return { api, req, res, db };
};

export default context;
