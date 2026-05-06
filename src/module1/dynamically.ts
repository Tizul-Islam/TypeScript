// dynamically typed language 
// variable change type any time

type GenericArray<value> = Array<value>;

const frined: GenericArray<string> = ["John", "Jane", "Bob"];

const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5];

const mixed: GenericArray<string | number> = ["John", 1, "Jane", 2, "Bob", 3];

const isEligible: GenericArray<boolean> = [true, false, true, false]; 

type Coordinates<X, Y> = [X , Y ];
const coordinates1 : Coordinates<number, string> = [10 , "20" ] ; 
const coordinates2 : Coordinates<string, number> = ["10" , 20 ] ; 