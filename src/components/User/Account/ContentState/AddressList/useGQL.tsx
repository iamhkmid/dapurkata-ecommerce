import { useMutation, useQuery } from "@apollo/client";
import { useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthCtx";
import { DELETE_RECIPIENT } from "../../../../../graphql/recipient/mutations";
import { RECIPIENTS } from "../../../../../graphql/recipient/queries";
import { TGQLDelRecipient, TRecipients } from "../../../../../types/recipient";

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

export const useGQLGetRecipients = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error } = useQuery<TRecipients>(RECIPIENTS, {
    errorPolicy: "all",
    variables: { userId: user.id },
  });

  return {
    data: data?.recipients,
    loading,
    error,
  };
};
