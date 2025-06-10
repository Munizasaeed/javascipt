// data type in javascript
// console.log("data type pratice")
// let c=123;
// console.log(c);
// console.log(typeof c);
// let haspassport=false;
// console.log(haspassport);
// console.log(typeof haspassport);
// let e=true;
// console.log(e);
// console.log(typeof e);
// let f;
// console.log(f);
// console.log(typeof f);
// console.log(); //for extra space
// //string conversation any number to string 
// console.log("number conversation")
// let g=12n;
// console.log(g);
// console.log(typeof g);
//  let h= String(g);
// console.log(h);
// console.log(typeof h);
// //number conversion any other datatype to number
// console.log("number conversation")
// let a="123tap"; //string to a number
// console.log(a);
// console.log(typeof a);
// let b= parseInt(a);
// console.log(b);
// console.log(typeof b);
// console.log();
// let i=false;// boolean to number
// console.log(i);
// console.log(typeof i);
// let j=Number(i);
// console.log(j);
// console.log(typeof j);
// console.log();
// console.log("booleanconversation");
// let k="ku";// boolean to number
// console.log(k);
// console.log(typeof k);
// let l=Boolean(k);
// console.log(l);
// console.log(typeof l);
// console.log();
// comparsion operators
//  let age=19;
//   console.log(age==19);
//   console.log();
//   let username ="umer";
//   let entered_username="ahmad";
//   console.log(username==entered_username);
// compare a number with oher data type
// let m=5;
// let n='5';
// console.log(m==n);
// console.log(m===n);
// console.log(true==1);
// console.log(true=='1');
// console.log(true==='1');
// let number = null;
// console.log("Type of number is:" ,typeof number);
//  console.log(null==undefined);
//  console.log(null===undefined);
//  console.log(''==0);
//  console.log(''===0);
//  console.log(false=='');
//  console.log(false==='');
//  console.log(null==false);
//  console.log(undefined==0);
//  console.log(true=='true');
//  console.log('001'==1);
//  console.log(5=='5');
//  let o=true;
// console.log(o);
// console.log("type of o is :" ,typeof o);
// let p=Number(o);
// console.log(p);
// console.log("type of p is :" ,typeof p);
// CONTROL STRUCTURE 
// let age =23;
// if (age>=23);
// {console.log("welcome");}
// let shopping=1000; // if
// if(shopping>=10000);{
//     console.log("freeshipping");
// }
// console.log("if else statment")
// console.log();
// let isvip=true;
// if(isvip==true){
//     console.log("go to vip longue");
// }
// else{
//     console.log("go to normal longue");
console.log();
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// Prompt the user for input
// rl.question("Are you VIP? (yes/no) ", (userinput) => {
//     // Check the user input
//     if (userinput === "yes") {
//         console.log("Welcome to VIP lounge");
//     } else {
//         console.log("Welcome to normal lounge");
//     }
    
//     // Close the readline interface
//     rl.close();
// });
console.log();
const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question("Enter age: ", (userInput) => {
    let age = parseInt(userInput); // Convert user input to an integer
    if (age <= 12) {
        console.log("Get children's ticket price");
    } else if (age <= 65) {
        console.log("Get adult ticket price");
    } else {
        console.log("Get senior's ticket price");
    }
    r1.close(); // Close the readline interface
});