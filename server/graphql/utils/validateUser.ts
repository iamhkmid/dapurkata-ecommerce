import { ApolloError, AuthenticationError } from "apollo-server-express";

type TValidateUser = (params: {
  currRole: string;
  targetRole: "USER" | "ADMIN";
  currId: string;
  targetId: string;
}) => void;
export const validateUser: TValidateUser = (params) => {
  const { currRole, targetRole, currId, targetId } = params;
  if (!targetId) throw new ApolloError("Data not found");
  if (currRole === targetRole && currId !== targetId)
    throw new AuthenticationError("User role has no authority");
};
