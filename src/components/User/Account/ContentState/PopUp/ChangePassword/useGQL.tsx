import { useMutation } from "@apollo/client";
import { CHANGE_PASSWORD } from "../../../../../../graphql/user/mutations";
import { TChangePassVar } from "../../../../../../types/user";

type TchangePass = {
  changePassword: { message: string };
};

export const useGQLChangePassword = () => {
  const [createRecipient, { data, loading, error }] = useMutation<TchangePass>(
    CHANGE_PASSWORD,
    {
      errorPolicy: "all",
    }
  );
  const changePass = async (data: TChangePassVar) => {
    return await createRecipient({
      variables: { data },
    });
  };
  return {
    changePassword: changePass,
    data: data?.changePassword,
    loading,
    error,
  };
};
