// enum

// type UserRoles = "admin" | "user" | "manager";

enum UserRoles {
    Admin = "admin",
    User = "user",
    Manager = "manager"
}

const canEdit = (role: UserRoles) => {

    if(role === UserRoles.Admin || role === UserRoles.Manager){
        return true
    }
    else return false;

}