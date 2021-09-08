import {
  ApolloClient,
  InMemoryCache,
  concat,
  ApolloLink,
} from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { createContext, FC, useEffect } from "react";
import { createUploadLink } from "apollo-upload-client";
import { useState } from "react";
import { TApolloClientCtx } from "../types/context";
import { useApolloWithWs } from "../hooks/useApolloWithWs";

const isBrowser = process.browser;

export const client = new ApolloClient({
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          books: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          authors: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          categories: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          users: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          shoppingCart: {
            merge(existing, incoming) {
              return incoming;
            },
          },
          recipients: {
            merge(existing, incoming) {
              return incoming;
            },
          },
        },
      },
    },
  }),
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const token =
    isBrowser &&
    (sessionStorage.getItem("authToken") || localStorage.getItem("authToken"));
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  }));

  return forward(operation);
});
const httpLink = createUploadLink({
  uri: `${process.env.NEXT_PUBLIC_GQL_HTTP_URL}/graphql`,
});

const httpLinkApollo = () => {
  client.setLink(concat(authMiddleware, httpLink));
  return client;
};

export const ApolloClientCtx = createContext<TApolloClientCtx>(null);
const ApolloClientCtxProvider: FC = ({ children }) => {
  const [isLoggin, setIsLoggin] = useState(false);
  const apolloWithWs = useApolloWithWs({
    isLoggin,
    authMiddleware,
    client,
    httpLink,
  });
  return (
    <ApolloClientCtx.Provider
      value={{
        isLoggin,
        setIsLoggin,
      }}
    >
      <ApolloProvider client={isLoggin ? apolloWithWs : httpLinkApollo()}>
        {children}
      </ApolloProvider>
    </ApolloClientCtx.Provider>
  );
};

export default ApolloClientCtxProvider;
