import { useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { CREATE_USER } from "../../../../graphql/user/mutations";
import { USERS_ADMIN_LIST } from "../../../../graphql/user/queries";
import { TFormCreateUser, TGQLUserAdminList } from "../../../../types/user";

export const useGQLUsersAL = () => {
  const { data, error, loading } = useQuery<TGQLUserAdminList>(
    USERS_ADMIN_LIST,
    {
      errorPolicy: "all",
    }
  );
  const newData = data?.users || [];
  return { data: newData, error, loading };
};
export const useGQLCreateUser = () => {
  const [createUser, { data, error, loading }] = useMutation(CREATE_USER, {
    errorPolicy: "all",
  });
  const GQLCreateUser = async (values: TFormCreateUser) => {
    const { userPic, confirmPassword, ...rest } = values;
    const [pic] = userPic;
    const variables = { userPic: pic, data: { ...rest } };
    return await createUser({
      variables,
      refetchQueries: [{ query: USERS_ADMIN_LIST }],
      awaitRefetchQueries: true,
    });
  };
  return {
    createUser: GQLCreateUser,
    data: data?.createUser,
    error,
    loading,
  };
};
