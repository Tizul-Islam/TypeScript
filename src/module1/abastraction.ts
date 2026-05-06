// interface class


// interface Vehicle{

//     car():void
//     bus():void
//     bike():void

// }

// class Car implements Vehicle{
//     car(){
//         console.log("Car")
//     }
//     bus(){
//         console.log("Bus")
//     }
//     bike(){
//         console.log("Bike")
//     }
// }   

// const Newcar =new Car()

// Newcar.car()



//Abastraction class
abstract class Vehicle{
abstract car():void
abstract bus():void
abstract bike():void

}

class NewcarCar extends Vehicle{
    car(){
        console.log("Car")
    }
    bus(){
        console.log("Bus")
    }
    bike(){
        console.log("Bike")
    }
}       

const Newcar1 =new NewcarCar()

Newcar1.car()

