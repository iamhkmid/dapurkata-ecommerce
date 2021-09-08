import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import {
  CITIES_BY_PROV_ID,
  PROVINCES,
} from "../../../../../../graphql/courier/queries";
import { CREATE_RECIPIENT } from "../../../../../../graphql/recipient/mutations";
import { RECIPIENTS } from "../../../../../../graphql/recipient/queries";
import { TGQLCities, TGQLProvinces } from "../../../../../../types/courier";
import {
  TCreateRcptVar,
  TGQLCreateRecipient,
} from "../../../../../../types/recipient";

export const useGQLGetFormData = ({ watchProvId }: { watchProvId: string }) => {
  const {
    data: dataProvs,
    loading: loadProvs,
    error: errorProvs,
  } = useQuery<TGQLProvinces>(PROVINCES, {
    errorPolicy: "none",
    fetchPolicy: "cache-first",
  });

  const {
    data: dataCities,
    loading: loadCities,
    error: errorCities,
    refetch,
  } = useQuery<TGQLCities>(CITIES_BY_PROV_ID, {
    skip: !watchProvId,
    errorPolicy: "none",
    fetchPolicy: "cache-first",
    variables: { province_id: watchProvId },
  });

  return {
    dataProvs: dataProvs?.provinces,
    loadProvs,
    errorProvs,
    dataCities: dataCities?.cities,
    loadCities,
    errorCities,
  };
};
export const useGQLCreateRecipient = ({ userId }: { userId: string }) => {
  const [createRecipient, { data, loading, error }] =
    useMutation<TGQLCreateRecipient>(CREATE_RECIPIENT, {
      errorPolicy: "none",
    });
  const createRcpt = async (variables: TCreateRcptVar) => {
    return await createRecipient({
      variables,
      refetchQueries: [{ query: RECIPIENTS, variables: { userId } }],
      awaitRefetchQueries: true,
    });
  };
  return {
    createRecipient: createRcpt,
    data: data?.createRecipient,
    loading,
    error,
  };
};
