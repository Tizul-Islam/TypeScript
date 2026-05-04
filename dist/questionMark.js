"use strict";
// Ternary Operator (? : )
// condition ? true value : false value
Object.defineProperty(exports, "__esModule", { value: true });
// nullish coalescing operator (??) -- 
// value ?? defaultValue  
// ??  OR   || (OR operator) ??   
// optional chaining (?.)
// ?.  OR  .(dot)
//ternary operator 
const age = 20;
const result = age >= 18 ? "adult" : "minor";
console.log(result);
const isLoggedIn = true;
const message = isLoggedIn
    ? "Welcome Back"
    : "Please Login";
console.log(message);
// nullish coalescing operator (??) -- 
const username = null;
const name = username ?? "Guest";
console.log(name);
const price = undefined;
const finalPrice = price ?? 100;
console.log(finalPrice);
// optional chaining (?.)
const user = {
    name: "John",
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};
console.log(user?.address?.city);
const response = {
    data: {
        user: {
            name: "Tizul"
        }
    }
};
console.log(response?.data?.user?.name);
//# sourceMappingURL=questionMark.js.map