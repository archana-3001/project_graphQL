"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
type Student{
    ID: String
    Name : String
    Club: String
},
type Club{
    ID: String
    Name : String
},
type Query{
    allStudents: [Student!]!
    allClubs: [Club!]!
    StudentById(ID: String!): String
}`;
exports.default = typeDefs;
