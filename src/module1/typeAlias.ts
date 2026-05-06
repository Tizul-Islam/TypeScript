// type alias 

type User = {
    name: string,
    age: number,
    isStudent: boolean,
    courses: string[],
    address:{
        city: string,
        country: string
    },

}

const user1 : User = {
    name: "Md. Junaid Rahman",
    age: 23,
    isStudent: true,
    courses: ["Math", "Science", "English"],
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

const user2 : User = {
    name: "Md. Junaid Rahman",
    age: 23,
    isStudent: true,
    courses: ["Math", "Science", "English"],
    address: {
        city: "Dhaka",
        country: "Bangladesh"
    }
};

console.log(user1, user2)