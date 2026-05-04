"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DashBoardUser = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User Dashboard";
    }
    else if (role === "editor") {
        return "Editor Dashboard";
    }
};
console.log(DashBoardUser("editor"));
const personStudent = {
    name: "Md. Junaid Rahman",
    age: 23,
    studentId: 12345,
    gpa: 3.9
};
console.log(personStudent);
//# sourceMappingURL=UnionAndintersection.js.map