"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __importDefault(require("../models/data"));
const resolvers = {
    Query: {
        allStudents: () => {
            return data_1.default.students;
        },
        allClubs: () => {
            return data_1.default.clubs;
        },
        StudentById: (args) => {
            const res = data_1.default.students.find((student) => student.ID === args.ID);
            return res.Name;
        }
    }
};
exports.default = resolvers;
