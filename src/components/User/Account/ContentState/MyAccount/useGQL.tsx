import { useMutation, useQuery } from "@apollo/client";
import { useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthCtx";
import { UPDATE_USER_BY_USER } from "../../../../../graphql/user/mutations";
import { INIT_DATA_MY_ACCOUNT } from "../../../../../graphql/user/queries";
import { TFormMyAccount, TGQLUpdateUser } from "../../../../../types/user";

type TInitData = {
  user: {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    phone: string;
    userPicture: string;
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

export const useGQLUpdateUser = () => {
  const { user } = useContext(AuthContext);
  const [updateUser, { data, error, loading }] = useMutation<TGQLUpdateUser>(
    UPDATE_USER_BY_USER,
    {
      errorPolicy: "all",
    }
  );
  const GQLUpdateUser = async (values: TFormMyAccount) => {
    return await updateUser({
      variables: { userId: user?.id, data: values },
      refetchQueries: [
        { query: INIT_DATA_MY_ACCOUNT, variables: { userId: user?.id } },
      ],
      awaitRefetchQueries: true,
    });
  };
  return {
    updateUser: GQLUpdateUser,
    data: data?.updateUser,
    error,
    loading,
  };
};
