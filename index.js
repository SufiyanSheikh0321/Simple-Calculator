#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operaror",
        choices: ["Addition", "Subtraction", "Multipliction", "Division"],
    },
]);
//  conditions
if (answer.operaror === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operaror === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operaror === "Multipliction") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operaror === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Please select vaild operator");
}
