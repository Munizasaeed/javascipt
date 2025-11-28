// Declare variables for name, age, isStudent. Print sentences using template literals.
let name="muniza";
let age=20;
let isstudent=true;


console.log(`Name:${name}`);
console.log(`Age:${age}`);
console.log(`studentpass=${isstudent}`);
let driver = "Ahmed";
let fare = 780;
let rideCompleted = true;
console.log(`your driver,${driver} and your ,${fare} and your ride is completed ,${rideCompleted}`);

// ✅ 1. Student Registration Form

// Create a program that stores a student's name, age, and course using variables and prints a formatted student profile.

let student={
    name:"muniza",
    age:20,
    course:"cs"
}
console.log(`student profile
    Name:${student.name},
    Age:${student.age},
    Course:${student.course}`);

// Store city name, temperature, and "isRaining" status, then print a weather report.
let weather={
    cityname:"okara",
    temperature:45,
    israining:true
}
console.log(`weather Report:
city:${weather.cityname},
temperature:${weather.temperature},
Israining:${weather.israining}`);

let first ="muniza";
let last="saeed";
console.log(first+"",last);

let d=10;
let e=20;
console.log(d+e);
console.log(d-e);
console.log(d*e);
console.log(d/e);
console.log(d%e);


// Build a simple calculator that adds, subtracts, multiplies, divides two numbers.
// Take two numbers from user
// const readline = require("readline-sync");

// let num1 = Number(readline.question("Enter first number: "));
// let num2 = Number(readline.question("Enter second number: "));

// console.log(`Addition: ${num1 + num2}`);
// console.log(`Subtraction: ${num1 - num2}`);
// console.log(`Multiplication: ${num1 * num2}`);
// console.log(`Division: ${num1 / num2}`);
// console.log(`Remainder: ${num1 % num2}`);

// task A small shop sells pens and notebooks.

// A pen costs 20 Rs and a notebook costs 50 Rs.

// A customer buys 3 pens and 2 notebooks.

// Tasks:

// Create variables to store the prices and quantities.

// Calculate:

// Total cost of pens

// Total cost of notebooks

// Total bill (pens + notebooks)

// Average price per item

// Remainder when total bill is divided by 100

// Use template literals to print the results.

let pen=20;
let notebook=50;
 let penquantity=3;
 let notebookquantity=2;
 let g=pen*penquantity;
console.log(`pen price: ${g}`);
let i=notebook*notebookquantity;
 console.log(`notebook price: ${i}`);
 let m=g+i;
console.log(`total price:${m}`);

let totalItems = penquantity + notebookquantity;
let average = m / totalItems;
console.log(`average price per item: ${average}`);
let n=m%100;
console.log(`reminder:${n}`);
