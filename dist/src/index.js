"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const express_1 = __importDefault(require("express"));
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
console.log(port);
const server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
});
app.get("/", (req, res) => {
    try {
        res.send("hello from server side");
    }
    catch (_a) {
        console.log("error in server side");
    }
});
// normal ApolloServer listen call but url will contain /graphql
server.listen().then(function ({ url }) {
    console.log(`🚀 Server ready at ${url}`);
});
//express server
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
// console.log("Hello => number 1");
// setTimeout(() => {
//   console.log("The timeout running last => number 4");
// }, 0);
// setImmediate(() => {
//   console.log("Running before the timeout => number 3");
// });
// process.nextTick(() => {
//   console.log("Running at next tick => number 2");
// });
