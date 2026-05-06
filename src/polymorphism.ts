// polymorphism

class Person {


    getsleep() {
        console.log("Person sleep")
    }

}

class Student extends Person {

    getsleep() {
        console.log("Student sleep")
    }
}

class Teacher extends Person {

    getsleep() {
        console.log("Teacher sleep")
    }
}


const getslseepHour = (param: Person) => {
    param.getsleep()
}

const person1 = new Person()
const student1 = new Student()
const teacher1 = new Teacher()

getslseepHour(person1)
getslseepHour(student1)
getslseepHour(teacher1)



//shape

class Shape {
    getArea(): number {
        return 0;
    }
}
class Circle extends Shape {

    //area = pi*r*r

    radius: number;
    constructor(radius: number) {
        super()
        this.radius = radius
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}

class Rectangle extends Shape {
    height: number;
    width: number;

    constructor(height: number, width: number) {
        super()
        this.height = height
        this.width = width
    }

    getArea(): number {
        return this.height * this.width
    }
}

const getArea = (param: Shape) => {
    param.getArea()
}
const shape1 = new Shape()
const circle1 = new Circle(10)
const rectangle1 = new Rectangle(10, 20)

console.log(shape1.getArea());
console.log(circle1.getArea());
console.log(rectangle1.getArea());