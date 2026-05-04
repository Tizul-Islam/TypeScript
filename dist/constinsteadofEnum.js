"use strict";
// enum
Object.defineProperty(exports, "__esModule", { value: true });
// type UserRoles = "admin" | "user" | "manager";
const UserRoles = {
    Admin: "admin",
    User: "user",
    Manager: "manager"
};
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Manager) {
        return true;
    }
    else
        return false;
};
const result = canEdit(UserRoles.Admin);
console.log(result);
//# sourceMappingURL=constinsteadofEnum.js.map