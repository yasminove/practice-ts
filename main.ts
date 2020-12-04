// class Animal { 
//     protected name: string; 
//     constructor(animalNames){
//         this.name = animalNames
//     }

//     walk(distance){
//         console.log(`hi i am ${this.name} and I walked ${distance} meters`);
//     }
// }

// let animal = new Animal('Yori');
// animal.walk(50);

// class Snake extends Animal {
//     constructor(animalName){
//         super(animalName)
//     }

//     walk(){
//         console.log(`${this.name} snakes don't walk`);
        
//     }
// }

// let snake = new Snake('SWAMNA'); 

// snake.walk();

// class Greet {
//     greeting: string; 
//     constructor(message:string){
//         this.greeting = message;
//     }

//     greet(){
//         console.log(`Hello ${this.greeting}`);
        
//     }
// }

// // let greetWorld = new Greet('World');
// let greetWorld = new Greet('Yasmin');


// greetWorld.greet()

class Person {
    constructor(public firstName: string,  public lastName: string){
        console.log(`Hello ${this.firstName} ${this.lastName}`); 
    }

    describe(){
        console.log(`This iszzzz ${this.firstName} ${this.lastName}`);
    }
}

// let john = new Person('john', 'doe');
// john.describe()
// console.log(john, 'john');


// class Employee extends Person {
//     constructor(public first_name:string, public last_name:string, public jobTitle:string){
//         super(first_name, last_name)
//     }

//     describe(){
//         console.log(super.describe()+`I am a ${this.jobTitle}`);
//     }
// }

// let developer = new Employee('yasmin', 'hillis', 'Web Developer');
// console.log(developer.describe());





