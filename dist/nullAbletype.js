"use strict";
// null Able Type
Object.defineProperty(exports, "__esModule", { value: true });
const userName = null;
function printUserName(name) {
    if (name === null) {
        console.log("User not found");
    }
    else {
        console.log(name);
    }
}
printUserName(userName);
// Unknown Type 
const userInput = 10;
function processUserInput(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return "Invalid Input";
}
console.log(processUserInput(userInput));
// Never Type
function throwError(message) {
    throw new Error(message);
}
// console.log(throwError("Something went wrong"))
//# sourceMappingURL=nullAbletype.js.map