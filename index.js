import * as readline from "readline";
import * as fs from 'fs'

const file = fs.readFileSync("./files/input1.txt", "utf-8");
// console.log(file);
fs.writeFileSync("./files/input1.txt", "I will be a software engineer soon");
const file2 = fs.readFileSync("./files/input1.txt", "utf-8");
// console.log(file2);
fs.writeFileSync("./files/input1.txt", "I will be a high salaried Software engineer");
const file3 = fs.readFileSync("./files/input1.txt", "utf-8");
// console.log(file3);

fs.writeFileSync("./files/input.txt" , `This is from input1 file ${file3} written on date ${new Date()}`);
const file4 = fs.readFileSync("./files/input.txt", "utf-8");
// console.log(file4);

const re = fs.rmdirSync("./New");
// console.log(re)

const state = fs.statSync("./files/input1.txt")
// console.log(state)

const files = fs.readdirSync("./files");
// console.log(files);

const exists = fs.existsSync("./files/inside");
// console.log(exists);