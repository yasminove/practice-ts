// class Animal { 
//     protected name: string; 
//     constructor(animalNames){
//         this.name = animalNames
//     }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        console.log("Hello " + this.firstName + " " + this.lastName);
    }
    Person.prototype.describe = function () {
        console.log("This iszzzz " + this.firstName + " " + this.lastName);
    };
    return Person;
}());
// let john = new Person('john', 'doe');
// john.describe()
// console.log(john, 'john');
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(first_name, last_name, jobTitle) {
        var _this = _super.call(this, first_name, last_name) || this;
        _this.first_name = first_name;
        _this.last_name = last_name;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee.prototype.describe = function () {
        console.log(_super.prototype.describe.call(this) + ("I am a " + this.jobTitle));
    };
    return Employee;
}(Person));
var developer = new Employee('yasmin', 'hillis', 'Web Developer');
console.log(developer.describe());
