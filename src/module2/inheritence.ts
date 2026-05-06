// inheritence 

class Parent {

    name: string;
    age: number;
    id: number;


    constructor(name: string, age: number, id: number) {
        this.name = name;
        this.age = age;
        this.id = id;
    }

    getsleep() {
        console.log(`${this.name} is sleeping ${this.age} and ${this.id} and years old`)
    }

}


class Student extends Parent {

    constructor(name: string, age: number, id: number) {

        super(name, age, id)

        

    }

}



const student1 = new Student("John", 20, 123)
student1.age;


