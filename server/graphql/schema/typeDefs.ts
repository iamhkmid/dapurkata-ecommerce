import { mergeTypeDefs } from "@graphql-tools/merge";
import author from "./author/typeDefs";
import category from "./category/typeDefs";
import book from "./book/typeDefs";
import user from "./user/typeDefs";
import shoppingCart from "./shoppingCart/typeDefs";
import recipient from "./recipient/typeDefs";
import auth from "./auth/typeDefs";
import courier from "./courier/typeDefs";
import transaction from "./transaction/typeDefs";
import directive from "./directives/typeDefs";
import * as scalar from "./scalar";

const typeDefs = [
  scalar.typeDefs,
  author,
  category,
  book,
  user,
  shoppingCart,
  recipient,
  courier,
  auth,
  transaction,
  directive,
];

export default mergeTypeDefs(typeDefs);
