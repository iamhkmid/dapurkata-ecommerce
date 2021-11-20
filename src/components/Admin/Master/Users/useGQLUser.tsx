import { useMutation, useQuery } from "@apollo/client";
import { useContext } from "react";
import { useEffect } from "react";
import { AdminNavCtx } from "../../../../contexts/AdminNavCtx";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import {
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER,
} from "../../../../graphql/user/mutations";
import {
  INIT_DATA_UPDATE_USER,
  USERS_ADMIN_LIST,
  USER_DEL_DATA,
  USER_DETAIL_BY_ADMIN,
} from "../../../../graphql/user/queries";
import {
  TFormCreateUser,
  TFormUpdateUser,
  TGQLDataDelUser,
  TGQLUpdateUser,
  TGQLUserAdminList,
  TGQLUserDetailByAdmin,
  TInitDataUpdateUser,
  TUpdateUserVal,
} from "../../../../types/user";

type TUserDetailByAdmin = {
  userId: string;
};
export const useGQLUserDetail = (props: TUserDetailByAdmin) => {
  const { userId } = props;
  const { data, error, loading } = useQuery<TGQLUserDetailByAdmin>(
    USER_DETAIL_BY_ADMIN,
    { variables: { userId }, errorPolicy: "all" }
  );
  return { data: data?.user, error, loading };
};

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

type TDelUserVal = { userId: string; username: string };
type TDelMut = { deleteUser: { id: string } };
export const useGQLDeleteUser = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const [deleteUser, { data, error, loading }] = useMutation<TDelMut>(
    DELETE_USER,
    {
      errorPolicy: "all",
    }
  );
  const GQLDeleteUser = async (values: TDelUserVal) => {
    return deleteUser({
      variables: values,
      refetchQueries: [{ query: USERS_ADMIN_LIST }],
      awaitRefetchQueries: true,
    });
  };
  useEffect(() => {
    if (!!data?.deleteUser) {
      dispatch({ type: "CLOSE_ALL_POPUP" });
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { message: "Berhasil menghapus data", color: "success" },
      });
    }
  }, [data?.deleteUser]);
  useEffect(() => {
    if (error) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { color: "danger", message: error.message },
      });
    }
  }, [error]);
  return {
    deleteUser: GQLDeleteUser,
    data: data?.deleteUser,
    error,
    loading,
  };
};

export const useGQLUserDelData = (values: { userId: string }) => {
  const { data, error, loading } = useQuery<TGQLDataDelUser>(USER_DEL_DATA, {
    variables: values,
    errorPolicy: "all",
  });

  return { data: data && data.user, error, loading };
};

type TUpdateUser = {
  userId: string;
};
export const useGQLInitData = ({ userId }: TUpdateUser) => {
  const { data, error, loading } = useQuery<TInitDataUpdateUser>(
    INIT_DATA_UPDATE_USER,
    {
      variables: { userId },
      fetchPolicy: "network-only",
      errorPolicy: "all",
    }
  );
  return { data: data?.user, error, loading };
};

export const useGQLUpdateUser = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const [updateUser, { data, error, loading }] = useMutation<TGQLUpdateUser>(
    UPDATE_USER,
    {
      errorPolicy: "all",
      awaitRefetchQueries: true,
    }
  );
  const GQLUpdateUser = async (values: TUpdateUserVal) => {
    const { userId, ...rest } = values;
    return await updateUser({
      variables: { userId, data: { ...rest } },
      refetchQueries: [{ query: USER_DETAIL_BY_ADMIN, variables: { userId } }],
    });
  };
  useEffect(() => {
    if (data?.updateUser)
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: {
          color: "success",
          message: "Berhasil ubah data pengguna",
        },
      });
  }, [data?.updateUser]);
  return {
    updateUser: GQLUpdateUser,
    data: data?.updateUser,
    error,
    loading,
  };
};
