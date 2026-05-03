// Type vs Interface

type User = {
    name: string,
    age: number
};

interface IUser {
    name: string;
    age: number
}

type Role = {
    role: "admin" | "user"
};

type userWithRole = User & Role;

const user1 : userWithRole = {
    name: "John",
    age: 20,
    role: "admin"
}

const user2 : IUser = {
    name: "John",
    age: 20,
    
}

console.log(user1)


