import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useContext } from "react";
import { UserNavCtx } from "../../../../contexts/UserNavCtx";
import { CREATE_USER_BY_USER } from "../../../../graphql/user/mutations";
import { TFormCreateUser } from "../../../../types/user";

export const useGQLCreateUser = () => {
  const { dispatch } = useContext(UserNavCtx);
  const [createUser, { data, error, loading }] = useMutation(
    CREATE_USER_BY_USER,
    {
      errorPolicy: "all",
    }
  );
  const GQLCreateUser = async (values: TFormCreateUser) => {
    const { userPic, confirmPassword, ...rest } = values;
    const [pic] = userPic;
    const variables = { userPic: pic, data: { ...rest } };
    return await createUser({ variables });
  };
  useEffect(() => {
    if (data)
      dispatch({
        type: "SHOW_MESSAGE",
        value: {
          message: "Berhasil membuat akun baru",
          color: "success",
        },
      });
  }, [data]);
  return {
    createUser: GQLCreateUser,
    data: data?.createUser,
    error,
    loading,
  };
};
