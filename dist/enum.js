"use strict";
// enum
Object.defineProperty(exports, "__esModule", { value: true });
// type UserRoles = "admin" | "user" | "manager";
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "admin";
    UserRoles["User"] = "user";
    UserRoles["Manager"] = "manager";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Manager) {
        return true;
    }
    else
        return false;
};
//# sourceMappingURL=enum.js.map