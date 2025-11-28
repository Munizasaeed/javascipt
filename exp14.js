// Task:

// Ask the user to enter units consumed, and calculate the total bill:

// Requirements:

// Use if…else if…else

// Use multiplication operator

// Use template literals

// Print the final bill amount

// Handle invalid input (negative units → print “Invalid units”)
// const readline=require ("readline-sync");
// let units=Number(readline.question("Enter the total unit consumed"));
// if(units<0){
//     console.log(`invaid units:${units}`);
// }
// else if(units<=100){
//     let g=units*5;
//     console.log(`Total bill is:${g}`);
// }
// else if (units<=200){
//       let e=units*7;
//     console.log(`Total bill is:${e}`);
// }
// else if (units<=300){
//       let f=units*10;
//     console.log(`Total bill is:${f}`);
// }

// else{
//       let h=units*15;
//     console.log(`Total bill is:${h}`);
// }


// Ask the user for age

// Ask the user for distance traveled (km)

// Apply correct fare formula

// Use if / else if / else

// Print the final total fare

// If age is negative → print "Invalid age"

const readline = require("readline-sync");

// Ask age first
let age = Number(readline.question("Enter the age: "));

// Check for invalid age immediately
if (age < 0) {
    console.log("Invalid age");
} else {
    // Only ask for distance if age is valid
    let distance = Number(readline.question("Enter the distance traveled (km): "));

    if (distance < 0) {
        console.log("Invalid distance");
    } else if (age <= 5) {
        console.log("Your ticket is free");
    } else if (age <= 18) {
        let g = distance * 5;
        console.log(`Your bill: ${g}`);
    } else if (age <= 60) {
        let i = distance * 10;
        console.log(`Your bill: ${i}`);
    } else {
        let k = distance * 7;
        console.log(`Your bill: ${k}`);
    }
}
