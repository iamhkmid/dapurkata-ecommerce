import { useMutation } from "@apollo/client";
import { CREATE_USER_BY_USER } from "../../../../graphql/user/mutations";
import { TFormCreateUser } from "../../../../types/user";

export const useGQLCreateUser = () => {
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
  return {
    createUser: GQLCreateUser,
    data: data?.createUser,
    error,
    loading,
  };
};
