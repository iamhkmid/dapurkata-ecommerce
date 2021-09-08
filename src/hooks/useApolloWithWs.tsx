import {
  ApolloClient,
  ApolloLink,
  concat,
  NormalizedCacheObject,
  split,
} from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { useEffect, useMemo, useRef } from "react";
import { SubscriptionClient } from "subscriptions-transport-ws";

type TProps = {
  isLoggin: boolean;
  httpLink: ApolloLink;
  authMiddleware: ApolloLink;
  client: ApolloClient<NormalizedCacheObject>;
};
export const useApolloWithWs = (props: TProps) => {
  const { isLoggin, httpLink, authMiddleware, client } = props;
  const isBrowser = process.browser;
  const subscriptionClient = useRef<SubscriptionClient>(null);

  useEffect(() => {
    const authToken =
      isBrowser &&
      (sessionStorage.getItem("authToken") ||
        localStorage.getItem("authToken"));

    if (isLoggin) {
      subscriptionClient.current = new SubscriptionClient(
        `${process.env.NEXT_PUBLIC_GQL_WS_URL}/graphql`,
        {
          reconnect: true,
          connectionParams: { authToken },
        }
      );
    } else {
      if (subscriptionClient.current) {
        subscriptionClient.current.close();
        subscriptionClient.current = null;
      }
    }
  }, [isLoggin]);

  const splitLink = useMemo(() => {
    if (isLoggin && isBrowser && subscriptionClient.current) {
      const wsLink = new WebSocketLink(subscriptionClient.current);
      return split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" &&
            definition.operation === "subscription"
          );
        },
        wsLink,
        httpLink
      );
    }
    return httpLink;
  }, [isLoggin]);

  useEffect(() => {
    client.setLink(concat(authMiddleware, splitLink));
  }, [splitLink]);

  return client;
};
