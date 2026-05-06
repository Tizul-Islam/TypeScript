// enum

// type UserRoles = "admin" | "user" | "manager";

const UserRoles = {
    Admin: "admin",
    User: "user",
    Manager: "manager"
} as const;

// Extract the types of the values ("admin" | "user" | "manager")
type Role = typeof UserRoles[keyof typeof UserRoles];

const canEdit = (role: Role) => {

    if (role === UserRoles.Admin || role === UserRoles.Manager) {
        return true
    }
    else return false;

}

const result = canEdit(UserRoles.Admin)
console.log(result)     