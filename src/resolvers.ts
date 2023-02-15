import typeDefs from "./schema";
import data from "../models/data";

const resolvers={
    Query:{
         allStudents: ()=>{
            return data.students;
        },
        allClubs: ()=>{
          return data.clubs;
        },
        StudentById: (args: any) =>{
          const res:any=data.students.find((student) => student.ID === args.ID);
          return res.Name;
        }
        
    }
  }
export default resolvers;