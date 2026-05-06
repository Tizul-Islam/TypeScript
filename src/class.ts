// oop -class object 

class Animal{

name: string;
age:number;
sound:string;




 constructor(
    name: string,
    age: number
  ) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello ${this.name}`
    );
  }

}
const animal = new Animal("Lion", 10)
animal.greet()
    