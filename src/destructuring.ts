// object destructuring 
// array destructuring



const user = {
    id: 123 ,
    name: {
        firstName: "Jhankar",
        lastName: "Mahbub"
    },
    email: "[EMAIL_ADDRESS]",
    gender: "male",
    favouriteSports: ["Cricket", "Football", "Basketball"]
}

// const myfavouriteSports = user.favouriteSports
// const mylastname = user.name.lastName


const {name: {lastName: myLastName},  //object destructuring 
} = user; 

console.log(myLastName) 


const frineds = ["John", "Jane", "Bob"]

const [A , , BestFriend] = frineds  //array destructuring

console.log(BestFriend) 