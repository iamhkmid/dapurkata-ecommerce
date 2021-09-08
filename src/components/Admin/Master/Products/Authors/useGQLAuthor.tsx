import { useMutation, useQuery } from "@apollo/client";
import { AUTHOR, AUTHORS } from "../../../../../graphql/author/queries";
import {
  CREATE_AUTHOR,
  DELETE_AUTHOR,
  UPDATE_AUTHOR,
} from "../../../../../graphql/author/mutations";
import {
  TGQLAuthor,
  TGQLAuthors,
  TGQLCreateAuthor,
  TGQLDeleteAuthor,
  TGQLUpdateAuthor,
  TValCreateAuthor,
  TValUpdateAuthor,
} from "../../../../../types/author";

export const useGQLAuthors = () => {
  const { data, error, loading } = useQuery<TGQLAuthors>(AUTHORS, {
    errorPolicy: "all",
  });
  const newData = data?.authors || [];
  return { data: newData, error, loading };
};

export const useGQLAuthor = (values: { authorId: string }) => {
  const { data, error, loading } = useQuery<TGQLAuthor>(AUTHOR, {
    variables: values,
    errorPolicy: "all",
  });
  return { data: data && data.author, error, loading };
};

export const useGQLCreateAuthor = () => {
  const [createAuthor, { data, error, loading }] =
    useMutation<TGQLCreateAuthor>(CREATE_AUTHOR, {
      errorPolicy: "all",
    });
  const GQLCreateAuthor = async (values: TValCreateAuthor) => {
    return await createAuthor({
      variables: { data: { ...values } },
      refetchQueries: [{ query: AUTHORS }],
      awaitRefetchQueries: true,
    });
  };
  return {
    createAuthor: GQLCreateAuthor,
    data: data?.createAuthor,
    error,
    loading,
  };
};

export const useGQLUpdateAuthor = () => {
  const [updateAuthor, { data, error, loading }] =
    useMutation<TGQLUpdateAuthor>(UPDATE_AUTHOR, {
      errorPolicy: "all",
    });
  const GQLUpdateAuthor = async (values: TValUpdateAuthor) => {
    const { authorId, name } = values;
    return await updateAuthor({ variables: { authorId, data: { name } } });
  };
  return {
    updateAuthor: GQLUpdateAuthor,
    data: data?.updateAuthor,
    error,
    loading,
  };
};

export const useGQLDeleteAuthor = () => {
  const [deleteAuthor, { data, error, loading }] =
    useMutation<TGQLDeleteAuthor>(DELETE_AUTHOR, {
      errorPolicy: "all",
    });
  const GQLDeleteAuthor = async (values: { authorId: string }) => {
    return await deleteAuthor({
      variables: values,
      refetchQueries: [{ query: AUTHORS }],
      awaitRefetchQueries: true,
    });
  };
  return {
    deleteAuthor: GQLDeleteAuthor,
    data: data && data.deleteAuthor,
    error,
    loading,
  };
};
