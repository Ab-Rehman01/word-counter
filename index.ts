#! /usr/bin/env node
// shabang
import inquirer from "inquirer"

const answers:{
    sentence: string
}=await inquirer.prompt(
   [
    {
        name:"sentence",
        type:"input",
        message:"enter your sentece to count word"
    }
   ] 
)
const words =answers.sentence.trim().split(" ")
console.log(words)
console.log(`your sentence word count is ${words.length}`);































