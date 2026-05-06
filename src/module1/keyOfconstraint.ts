// keyof constraint

type RichPerson = {
    name:string,
    age:number,
 email:string;
}

type MyPerson = "name" | "age" | "email" 
type MyPerson1 = keyof RichPerson;

const myPerson: MyPerson1 = "name" 
const myPerson1: MyPerson = "email" 

// console.log(myPerson)
// console.log(myPerson1)

type User ={
    id:number,
    name:string,
    age:number,
    email:string
}

const user: User = {
    id: 100,
    name: "John",
    age: 20,
    email: "[EMAIL_ADDRESS]"
}

//const myIDs =user.id;
const myID = user["id"]
const myName = user["name"]

// console.log(myName)
// console.log(myID)


const getPropertyValue = <T>(obj: T, key: keyof T) => {
    return obj[key];
}

const product = {
    brand: "Samsung",
    model: "S21",
    price: 1000
    
}

const student ={
    id:123,
    name:"John",
    age:20,
    
}
const result = getPropertyValue(product, "price")
console.log(result)

const result1 = getPropertyValue(student, "id") 
console.log(result1)


