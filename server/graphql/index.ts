import { ApolloServer } from "apollo-server-express";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { execute, subscribe } from "graphql";
import schema from "./schema";
import context from "./context";

const graphql = async ({ app, httpServer }) => {
  const apolloServer = new ApolloServer({
    schema,
    context,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });

  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
      onConnect(connectionParams, webSocket, context) {
        console.log("Connected!");
      },
      onDisconnect(webSocket, context) {
        console.log("Disconnected!");
      },
    },
    { server: httpServer, path: apolloServer.graphqlPath }
  );
  ["SIGINT", "SIGTERM"].forEach((signal) => {
    process.on(signal, () => subscriptionServer.close());
  });
};

export default graphql;
