import { useMutation, useQuery } from "@apollo/client";
import { useContext, useEffect } from "react";
import { AdminNavCtx } from "../../../../../contexts/AdminNavCtx";
import {
  CREATE_BOOK,
  DELETE_BOOK,
  UPDATE_BOOK,
} from "../../../../../graphql/book/mutations";
import {
  GET_BOOK,
  GET_BOOKS,
  GET_BOOK_DEL,
  GET_FORM_BOOK,
} from "../../../../../graphql/book/queries";
import {
  TGetBook,
  TGQLCreateBook,
  TGQLUpdateBook,
  TGQLGetBook,
  TGQLGetBookDel,
  TGQLGetBooks,
  TGQLGetFormBook,
  TGQLGetFormBookInit,
} from "../../../../../types/book";
import { TFormCreateBook, TFormUpdateBook } from "../../../../../types/Forms";

export const useGQLGetBooks = () => {
  const { data, error, loading } = useQuery<TGQLGetBooks>(GET_BOOKS, {
    errorPolicy: "all",
  });
  return {
    dataGBooks: data?.books || [],
    errorGBooks: error,
    loadGBooks: loading,
  };
};

export const useGQLGetBook = (values: { bookId: string }) => {
  const { data, error, loading } = useQuery<TGQLGetBook>(GET_BOOK, {
    variables: values,
    errorPolicy: "all",
  });
  return { dataGBook: data?.book, errorGBook: error, loadGBook: loading };
};

export const useGQLCreateBook = () => {
  const [createBook, { data, error, loading }] = useMutation<TGQLCreateBook>(
    CREATE_BOOK,
    {
      errorPolicy: "all",
    }
  );
  const GQLCreateBook = async (values: TFormCreateBook) => {
    const {
      libraryType,
      categories,
      readerGroup,
      cover: coverlist,
      ...rest
    } = values;
    const cat1 = { id: readerGroup };
    const cat2 = { id: libraryType };
    const cat3 = categories ? categories.map((cat) => ({ id: cat })) : [];
    const cats = [cat1, cat2, ...cat3];
    const [cover] = coverlist;
    const varData = { categories: cats, ...rest };
    const variables = { data: varData, cover };

    return await createBook({
      variables,
      refetchQueries: [{ query: GET_BOOKS }],
      awaitRefetchQueries: true,
    });
  };
  return {
    createBook: GQLCreateBook,
    data: data?.createBook,
    error,
    loading,
  };
};

type TGQLCategoryArgs = {
  id: string;
  name: string;
  group: string;
};
export const useGQLUpdateBook = () => {
  const [updateBook, { data, error, loading }] = useMutation<TGQLUpdateBook>(
    UPDATE_BOOK,
    {
      errorPolicy: "all",
    }
  );
  const GQLUpdateBook = async (values: TFormUpdateBook) => {
    const { readerGroup, libraryType, categories, ...rest } = values;
    const cat1 = { id: readerGroup };
    const cat2 = { id: libraryType };
    const cat3 = categories?.map((cat) => ({ id: cat }));
    const cats = [cat1, cat2, ...cat3];
    const variables = { data: { categories: cats, ...rest } };
    return await updateBook({
      variables,
      refetchQueries: [
        { query: GET_BOOK, variables: { bookId: values.bookId } },
      ],
      awaitRefetchQueries: true,
    });
  };
  return {
    updateBook: GQLUpdateBook,
    data: data?.updateBook,
    error,
    loading,
  };
};

export const useGQLDeleteBook = () => {
  const { dispatch } = useContext(AdminNavCtx);
  const [deleteBook, { data, error, loading }] = useMutation(DELETE_BOOK, {
    errorPolicy: "all",
  });
  const GQLDeleteBook = async (values: { bookId: string }) => {
    return await deleteBook({
      variables: values,
      update: (cache) => {
        cache.modify({
          fields: {
            books: (existingRefs, { readField }) => {
              return (existingRefs as []).filter((val) => {
                return readField("id", val) !== values.bookId;
              });
            },
          },
        });
      },
    });
  };
  useEffect(() => {
    if (!!data?.deleteBook) {
      dispatch({
        type: "SHOW_GLOBAL_MESSAGE",
        value: { message: "Berhasil menghapus data", color: "success" },
      });
    }
  }, [data?.deleteBook]);
  return {
    deleteBook: GQLDeleteBook,
    data: data && data.deleteBook,
    error,
    loading,
  };
};

export const useGQLGetFormBook = () => {
  const { data, error, loading } = useQuery<TGQLGetFormBook>(GET_FORM_BOOK, {
    errorPolicy: "all",
  });
  return { dataForm: data, errorForm: error, loadForm: loading };
};

export const useGQLGetBookDel = (values: { bookId: string }) => {
  const { data, error, loading } = useQuery<TGQLGetBookDel>(GET_BOOK_DEL, {
    variables: values,
    errorPolicy: "all",
  });
  return { dataGBD: data?.book, errorGBD: error, loadGBD: loading };
};

export const useGQLGetFormInit = (values: { bookId: string }) => {
  const { data, error, loading } = useQuery<TGQLGetFormBookInit>(GET_BOOK, {
    variables: values,
    fetchPolicy: "network-only",
    errorPolicy: "all",
  });
  return { dataGFI: data?.book, errorGFI: error, loadGFI: loading };
};
