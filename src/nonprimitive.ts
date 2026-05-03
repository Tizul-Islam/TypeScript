let myObject = {
    name: "John",
    age: 20,
    studentId: 12345,
    gpa: 3.9,
    courses: ["Math", "Science", "English"],
    isStudent: true,
    address: {
        city: "Dhaka",
        country: "Bangladesh"  
      }
}

console.log(myObject.address.city,)
console.log(typeof myObject)

const user: {

 firstName: string;
middleName?: string; // optional type
lastName: string;

  } = { 
firstName: "Jhankar",
 middleName: "Abu", // optional type
lastName: "Mahbub",
  }
console.log(user)