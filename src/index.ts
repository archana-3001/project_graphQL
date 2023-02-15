import {ApolloServer}  from 'apollo-server';
import express, { Express, Request, Response } from 'express';
import typeDefs from './schema';
import resolvers from './resolvers';
import dotenv from 'dotenv';

dotenv.config();


const app: Express=express();
const port=process.env.PORT;
console.log(port);
const server=new ApolloServer({
  typeDefs,
  resolvers,
});
  
app.get("/", (req: Request, res: Response)=>{
  try{
    res.send("hello from server side");
  }catch{
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

