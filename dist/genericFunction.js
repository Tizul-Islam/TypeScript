"use strict";
// const createArrowString = (value:string) =>[value]
Object.defineProperty(exports, "__esModule", { value: true });
// const createArraywithNumber = (value:number) =>[value]
// const createArryWithObject = ( value : {id: number, name:string}) =>[value]
// generic function 
const createArrayWithGeneric = (value) => [value];
const arrString = createArrayWithGeneric("hello");
const arrNumber = createArrayWithGeneric(10);
const arrObject = createArrayWithGeneric({ id: 1, name: "John" });
//tuple 
const createArrayWithTuple = (param1, param2) => [param1, param2];
const arrTuple = createArrayWithTuple("hello", "world");
const createArrayWithTuple2 = (param1, param2) => [param1, param2];
const arrTuple2 = createArrayWithTuple2('hello', 123);
const addStudent = (studentinfo) => {
    return {
        course: "CSE",
        ...studentinfo,
    };
};
const student1 = {
    id: 123,
    name: "John",
    age: 20,
    email: "[EMAIL_ADDRESS]"
};
const student2 = {
    id: 124,
    name: "Jane",
    age: 22,
    hall: 223,
    email: "[EMAIL_ADDRESS]"
};
const result1 = addStudent(student1);
const result2 = addStudent(student2);
console.log(result1);
console.log(result2);
//# sourceMappingURL=genericFunction.js.map