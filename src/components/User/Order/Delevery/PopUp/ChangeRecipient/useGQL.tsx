import { useMutation } from "@apollo/client";
import { DELETE_RECIPIENT } from "../../../../../../graphql/recipient/mutations";
import { RECIPIENTS } from "../../../../../../graphql/recipient/queries";
import { TGQLDelRecipient } from "../../../../../../types/recipient";

type TProps = {
  recipientId: string;
};

export const useGQLDelRcpt = ({ userId }: { userId: string }) => {
  const [deleteRecipient, { data, loading, error }] =
    useMutation<TGQLDelRecipient>(DELETE_RECIPIENT, {
      errorPolicy: "none",
    });
  const delRcpt = ({ recipientId }: TProps) => {
    return deleteRecipient({
      variables: { recipientId },
      refetchQueries: [{ query: RECIPIENTS, variables: { userId } }],
      awaitRefetchQueries: true,
    });
  };
  return {
    deleteRecipient: delRcpt,
    dataDelRcpt: data?.deleteRecipient,
    loadingDelRcpt: loading,
    errorDelRcpt: error,
  };
};
