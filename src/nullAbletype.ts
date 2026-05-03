// null Able Type

const userName : string | null = null

function printUserName(name : string | null){
    if(name === null){
        console.log("User not found")
    }else{
        console.log(name)
    }
}    

printUserName(userName)


// Unknown Type 

const userInput : unknown = 10

function processUserInput(value : unknown) : string{
    if(typeof value === "string"){
        return value.toUpperCase()
    }
    return "Invalid Input"
}

console.log(processUserInput(userInput))


// Never Type

function throwError(message: string) : never {
    throw new Error(message)
}

// console.log(throwError("Something went wrong"))