import { ApolloServer, AuthenticationError } from "apollo-server-express";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { execute, subscribe } from "graphql";
import schema from "./schema";
import context from "./context";
import jwt from "jsonwebtoken";
import { db } from "./services/db";
import { checkRole } from "./schema/directives/resolves/authDirective";

const graphql = async ({ app, httpServer }) => {
  const apolloServer = new ApolloServer({
    schema,
    context,
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: false });

  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
      onConnect: async (connectionParams, webSocket, context) => {
        console.log("Connected!");
        const token = connectionParams?.authToken?.split(" ")[1];
        if (!!token) {
          try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (!!decoded) {
              return { user: decoded };
            }
          } catch (error) {
            throw error;
          }
        }
      },
      onDisconnect(webSocket, context) {
        console.log("Disconnected!");
      },
    },
    { server: httpServer, path: apolloServer.graphqlPath }
  );
};

export default graphql;
