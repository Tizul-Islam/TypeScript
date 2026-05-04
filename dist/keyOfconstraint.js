"use strict";
// keyof constraint
Object.defineProperty(exports, "__esModule", { value: true });
const myPerson = "name";
const myPerson1 = "email";
const user = {
    id: 100,
    name: "John",
    age: 20,
    email: "[EMAIL_ADDRESS]"
};
//const myIDs =user.id;
const myID = user["id"];
const myName = user["name"];
// console.log(myName)
// console.log(myID)
const getPropertyValue = (obj, key) => {
    return obj[key];
};
const product = {
    brand: "Samsung",
    model: "S21",
    price: 1000
};
const student = {
    id: 123,
    name: "John",
    age: 20,
};
const result = getPropertyValue(product, "price");
console.log(result);
const result1 = getPropertyValue(student, "id");
console.log(result1);
//# sourceMappingURL=keyOfconstraint.js.map