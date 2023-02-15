import {gql}  from 'apollo-server';

const typeDefs = gql`
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

export default typeDefs;