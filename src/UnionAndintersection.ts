// Union Type
// মানে A অথবা B, যেকোনো একটা হবে।
type userRole = "admin" | "user" | "editor"

const DashBoardUser = (role: userRole) => {
    if(role === "admin"){
        return "Admin Dashboard"
    }else if(role === "user"){
        return "User Dashboard"
    }else if(role === "editor"){
        return "Editor Dashboard"
    }
}

console.log(DashBoardUser("editor"))

// Intersection Type 
// মানে Person এবং Student—দুটার সব property থাকতে হবে।

type Person = {
    name: string,
    age: number
}

type Student = {
    studentId: number,
    gpa: number
}

type personStudent = Person & Student

const personStudent : personStudent = {
    name: "Md. Junaid Rahman",
    age: 23,
    studentId: 12345,
    gpa: 3.9
}

console.log(personStudent)
