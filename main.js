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
// class Person {
//     constructor(public firstName: string,  public lastName: string){
//         console.log(`Hello ${this.firstName} ${this.lastName}`); 
//     }
//     describe(){
//         console.log(`This iszzzz ${this.firstName} ${this.lastName}`);
//     }
// }
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
// class Person {
//     private _name: string
//     get name(){
//         return this._name
//     }
//     set name (theName){
//         if(theName.length < 3){
//             console.log('name cannot be shorter than three'); 
//         } else {
//             console.log(`hi long name ${theName} your name is ${theName.length} long!`);
//         }
//         this._name = theName
//     }
// }
// let john = new Person();
// john.name = "jo"
// console.log(john.name, 'ppp');
// john.name;
// john.name = 'john'
// console.log(john.name, 'john.name');
// console.log(john.name, 'here');
// console.log(john);
// const fullNameMaxLength = 10;
// class Employee {
//   private _fullName: string = "";
//   get fullName(): string {
//     return this._fullName;
//   }
//   set fullName(newName: string) {
//     if (newName && newName.length > fullNameMaxLength) {
//       throw new Error("fullName has a max length of " + fullNameMaxLength);
//     }
//     this._fullName = newName;
//   }
// }
// let employee = new Employee();
// employee.fullName = "yasmin";
// console.log(employee.fullName, 'employee.fullName');
// if (employee.fullName) {
//   console.log(employee.fullName);
// }
// class Grid {
//     static origin = { x: 0, y: 0 };
//     calculateDistanceFromOrigin(point: { x: number; y: number }) {
//       let xDist = point.x - Grid.origin.x;
//       let yDist = point.y - Grid.origin.y;
//       return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
//     constructor(public scale: number) {}
//   }
//   let grid1 = new Grid(1.0); // 1x scale
//   let grid2 = new Grid(5.0); // 5x scale
//   console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//   console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Department name: " + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports() {
        console.log("Generating accounting reports...");
    }
}
var department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
department.generateReports();
