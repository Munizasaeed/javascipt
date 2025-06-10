//function as object
function exmp(){
    let a={
    name:"civic",
    cost:78.9,
    milage:6,
    }
    return a;
};
console.log(exmp());
  let add=function (b,c){
    return (b+c);
  }
  console.log(add(6,8)); 
//   console.log(add.name);
//   console.log(add.length);
 let add1=add;
 console.log(add1(12,67));
//  console.log(add());    
// 
class railwayform{
    constructor(givenname,trainno)
{
    console.log("constructor called");
    
        this.name=givenname;
        this.trainno=trainno;
    }   
    submit(){
        console.log(this.name + " form submit with train no "+this.trainno)
    }
    cancel(){
        console.log(this.name + " form cancel with train no "+this.trainno)
    }
    fill(givenname,trainno){
    this.name=givenname;
    this.trainno=trainno;}
};
let harry=new railwayform()
let umer=new railwayform()
harry.fill("harry",876);
umer.fill("umer",427);
harry.submit();
umer.submit();
harry.cancel();
// constructor
class Car {
    // Constructor method
    constructor(make, model, year) {
        this.make = make;   // Assigning the make of the car
        this.model = model; // Assigning the model of the car
        this.year = year;   // Assigning the year of the car
    }

    // Method to display car details
    displayDetails() {
        console.log(`Car: ${this.year} ${this.make} ${this.model}`);
    }

    // Method to start the car
    start() {
        console.log(`${this.make} ${this.model} is starting...`);
    }
}

// Creating an instance of the Car class
const myCar = new Car('Toyota', 'Corolla', 2020);

// Calling methods on the instance
myCar.displayDetails(); // Output: Car: 2020 Toyota Corolla
myCar.start();          // Output: Toyota Corolla is starting...

// scope chain
let globalVar = "I am a global variable"; // gobal scope

function outerFunction() {
    let outerVar = "I am an outer variable"; // function scope

    function innerFunction() {     // block scope
        let innerVar = "I am an inner variable";  
        console.log(innerVar); // Accessible
        console.log(outerVar); // Accessible (from outer function)
        console.log(globalVar); // Accessible (from global scope)
    }

    innerFunction();
}

outerFunction();
// Trying to access innerVar or outerVar here would result in a ReferenceError
// console.log(innerVar); // Uncaught ReferenceError: innerVar is not defined
// console.log(outerVar); // Uncaught ReferenceError: outerVar is not defined
console.log(globalVar);
const greet = function(name) {
    // return  '${name}';
    return name;
};
console.log(greet("umer"));
//  passing funtion as argument
// function exmp(fun){
//      fun(20,13);
// }
// function sub(a,b){
//     console.log (a+b);
// }
// exmp(sub);
//  function  return another function
function fun2(){
    console.log("inside fun2");
    function  fun3(){
        console.log("inside fun3"); 
    }
    return fun3;
}
let e=fun2();
e();