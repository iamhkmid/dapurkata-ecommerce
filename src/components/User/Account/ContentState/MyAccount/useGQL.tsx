import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthCtx";
import { INIT_DATA_MY_ACCOUNT } from "../../../../../graphql/user/queries";

type TInitData = {
  user: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    UserPicture: {
      id: string;
      url: string;
    };
  };
};

export const useGQLInitData = () => {
  const { user } = useContext(AuthContext);
  const { data, error, loading } = useQuery<TInitData>(INIT_DATA_MY_ACCOUNT, {
    skip: !user,
    variables: { userId: user?.id },
    fetchPolicy: "cache-first",
    errorPolicy: "all",
  });
  return { data: data?.user, error, loading };
};
