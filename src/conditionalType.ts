// consdition type

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;


type RichPerson = {
    bike: string,
    car: string,

}

type CheckVehicle<T> = T extends RichPerson ? true : false;

type Vehicle = CheckVehicle<RichPerson>




