// type Guard


//typeof type guard 

const convert = (
    value:
        | string
        | number
) => {

    if (
        typeof value ===
        "number"
    ) {
        return value * 1000;
    }

    return value;
};


// in 

type NormalUser = {
 name: string;
email: string;

}

type AdminUser = {
    role: "Admin";
    name: string;
}

const getUser = (user:NormalUser | AdminUser) =>
{
 if ("role" in user){
    console.log(`Welcome Admin ${user.name} And his role is : ${user.role}`)
 }
 else {
    console.log(`Welcome User ${user.email}` )
 }
}

getUser({
    name: "John",
    email: "[EMAIL_ADDRESS]"
})  