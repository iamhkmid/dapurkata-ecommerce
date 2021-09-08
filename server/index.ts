import express, { Application } from "express";
import * as http from "http";
import next from "next";
import cors from "cors";
import morgan from "morgan";
import altairRoute from "./routes/altairRoute";
import cookieParser from "cookie-parser";
import path from "path";
import graphql from "./graphql";
import { graphqlUploadExpress } from "graphql-upload";
import checkFile from "./middleware/checkFile";
import useragent from "express-useragent";

const PORT = parseInt(process.env.PORT || "3000");
const dev = process.env.NODE_ENV !== "production";
const corsOptions = { credentials: true, origin: process.env.CLIENT_URL };
const gqlUploadOptions = { maxFiles: 3 };
const nextApp = next({ dev, quiet: false });
const handle = nextApp.getRequestHandler();

const main = async () => {
  await nextApp.prepare();
  const app: Application = express();
  app.use(
    "/uploads",
    checkFile,
    express.static(path.join(process.cwd(), "/server/static/uploads"))
  );
  // app.use(express.static(path.join(__dirname, "../public")));
  // app.use("/_next", express.static(path.join(__dirname, "../.next")));
  app.use(cookieParser());
  app.use(express.json());
  app.use(cors(corsOptions));
  app.use(express.urlencoded({ extended: true }));
  app.use(useragent.express());

  app.use("/graphql", graphqlUploadExpress(gqlUploadOptions));
  app.use("/altair", altairRoute);
  app.get("*", (req, res) => handle(req, res));

  const httpServer = http.createServer(app);
  await graphql({ app, httpServer });
  httpServer.listen(PORT, (err?: any) => {
    if (err) throw err;
    handle;
    console.log(`Server is listening on port ${PORT}`);
    console.log(`GraphQL path: "/graphql"`);
  });

  process.on("warning", (warning) => {
    console.warn(warning.name); // Print the warning name
    console.warn(warning.message); // Print the warning message
    console.warn(warning.stack); // Print the stack trace
  });
};

main().catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});
