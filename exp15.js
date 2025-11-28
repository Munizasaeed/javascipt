// // Use while loop → print numbers 1 to 10
// let i=1;
// while(i<=10){
//     console.log(`value is ${i}`);
//     i++;
// }
// // Use do…while → print numbers 10 to 1.
// let j=10;
// do{
//     console.log(`value is: ${j}`)
//     j--;
// }while(j>=1);


// // Use for…of → print each letter of "JavaScript"
// let letters=['j','a','v','a','s','s','r','i','p','t'];
// for(let l of letters)
//     console.log(l);


//  task
// let attempt=3;
// while(attempt>0){
//     const readline = require("readline-sync");
//     let password = Number(readline.question("Enter the password: "));
//     if(password==1234){
//         console.log('login successfull');
//         break;
//     }
//     else{
//            attempt--;
//         console.log(`Incorrect password ${attempt} :attempts left`)
//     }
 
// }
// if (attempt==0){
//     console.log('locked');
// }


// task 2
// let count = 0;
// let total = 0;

// const readline = require("readline-sync");

// while (true) {
//     let price = Number(readline.question("Enter the price: "));

//     if (price == 0) {
//         break;  // stop the loop
//     }

//     if (price < 0) {
//         console.log("Invalid price, try again!");
//         continue;  // go back to start of loop
//     }

//     total = total + price;
//     count++;
// }

// console.log(`Total items: ${count}`);
// console.log(`Total bill: ${total}`);


// array
let fruits = ['apple', 'banana', 'grapes'];
console.log(fruits);  

// Access
console.log(fruits[0]);
console.log(fruits[2]);

// Modify
fruits[1] = 'orange';
console.log(fruits);

// Add at end
fruits.push("banana");
console.log(fruits);

// Add at start
fruits.unshift("kiwi");
console.log(fruits);

// Remove last
fruits.pop();
console.log(fruits);

// Remove first
fruits.shift();
console.log(fruits);

