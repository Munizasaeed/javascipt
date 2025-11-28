// // Write a program: input marks → output grade (A/B/C/F).
// const readline = require("readline-sync");

// let marks = Number(readline.question("Enter marks: "));
 
// if(marks>=90){
//     console.log("A+ grade");
// }
// else if(marks>=80){
//     console.log("B+ grade");
// }
// else if(marks>=70){
//     console.log("C+ grade")
// }
// else if(marks>=60){
//     console.log("D+ grade")
// }
// else{
//     console.log("fail")
// }
// // do the same progam with switch 

// const readline = require("readline-sync");
// let marks1 = Number(readline.question("Enter marks: "));
// let gradeCategory = Math.floor(marks1 / 10);

// switch (gradeCategory) {
//     case 10: // 100
//     case 9:
//         console.log("A+ grade");
//         break;

//     case 8:
//         console.log("B+ grade");
//         break;

//     case 7:
//         console.log("C+ grade");
//         break;

//     case 6:
//         console.log("D+ grade");
//         break;

//     default:
//         console.log("Fail");
// }


// Take a number from the user.
// Print:
// "Even" if number is even
// "Odd" if number is odd

// const readline=require("readline-sync");
// const num1=Number(readline.question("Enter a number"));
// if(num1 % 2==0){
//     console.log(`Number is even:${num1}`);
// }
// else{
//      console.log(`Number is odd:${num1}`);
// }

// A cinema sells tickets based on age:

// Age 0–12 → "Child Ticket"

// Age 13–17 → "Teen Ticket"

// Age 18+ → "Adult Ticket"

// Write a program that takes age and prints ticket type.
// const readline=require("readline-sync");
// const age=Number(readline.question("Enter a age"));
// if(age<=12){
//     console.log("Child Ticket");
// }
// else if(age<=17){
//     console.log("Teen Ticket");
// }
// else{
//     console.log("Adult Ticket");
// }
// Take a number 1–7 from the user and print the day of the week:
// const readline=require("readline-sync");
// const day=Number(readline.question("Enter a number"));

// switch(day){
//     case 1:
//         console.log("monday");
//     break;
//      case 2:
//         console.log("tuesday");
//     break;
//      case 3:
//         console.log("wednesday");
//     break;
//      case 4:
//         console.log("thursday");
//     break;
//      case 5:
//         console.log("friday");
//     break;
//      case 6:
//         console.log("saturday");
//     break;
//      case 7:
//         console.log("sunday");
//     break;
//     default:
//         console.log("invalid day")
// }

// Take two numbers from the user.
// Print:
// "Greater"
// "Smaller"
// "Equal"

const readline=require("readline-sync");
const num1=Number(readline.question("Enter a first number"));
const num2=Number(readline.question("Enter a second number"));
if(num1>num2){
    console.log(`greater number is ${num1}`)
}
else if(num1<num2){
     console.log(`smaller number is ${num1}`)
}
else{
     console.log(`both number are equal ${num1 } and ${num2}`)
}