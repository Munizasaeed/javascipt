// string methods
let userinput="   umer    |   UMER@example.Com |  javascript developer and coffee lover i love javascript !";
let parts =userinput.split("|");
console.log(parts);
let name=parts[0].trim(); // give umer to nmae index 0
// console.log(name);
console.log(parts[0]); // remove space
let email=parts[1].trim();
// console.log(email);
console.log(parts[1]);
let bio=parts[2].trim();
// console.log(bio);
console.log(parts[2]);
name=name.toUpperCase(); // convert name into upper case
console.log(name);
email=email.toLowerCase(); // convert email into lower case
console.log(email);
let likejs=bio.includes("javascript"); // check if javascript is exist or not
console.log(likejs);
let bio2=bio.lastIndexOf("javascript"); // index
console.log(bio2);
console.log(bio);
bio=bio.replaceAll("javascript","JS") // replace
console.log(bio);
let profesion=bio.slice(0,bio.indexOf("and")).trim(); // print from 0 index to end of and
console.log(profesion)
console.log(bio.length); // print length
let validemail=email.includes("@") && email.endsWith("com");
console.log(validemail);
let separatr="-".repeat(30);
let finalProfile=`
user profile:
${separatr}
Name       :${name.trim()}
Email       :${email.trim()}
Profession  :${profesion}
Likej       :${likejs}
${separatr}
`;
console.log(finalProfile);
// synchronous
// function task1(){
//     console.log("task1 execution started");
//     let start=Date.now();
//     let delay=5000;
//     let end=start + delay;
//     while(Date.now()<=end){
        
//     }
//     console.log("task1 execution completed"); 
// }
// function task2(){
//     console.log("task2 execution started");
//     let start=Date.now();
//     let delay=5000;
//     let end=start + delay;
//     while(Date.now()<=end){
        
//     }
//     console.log("task2 execution completed"); 
// }function task3(){
//     console.log("task3 execution started");
//     let start=Date.now();
//     let delay=5000;
//     let end=start + delay;
//     while(Date.now()<=end){
        
//     }
//     console.log("task 3 execution completed"); 
// }
// task1();
// task2();
// task3();
// asynchronous
// function fun1(){
//     console.log("fun1 execution started");
//     console.log("fun1 execution completed");
// } 
// function fun2(){
//     console.log("fun2 execution started");
//     let start=Date.now();
//     let delay=5000;
//     let end=start + delay;
//     while(Date.now()<=end){

//     }
//     console.log("fun2 execution completed"); 
// }
// function fun3(){
//     console.log("fun3 execution started");
//     let start=Date.now();
//     let delay=5000;
//     let end=start + delay;
//     while(Date.now()<=end){

//     }
//     console.log("fun3 execution completed");
// }function fun4(){
//     console.log("fun4 execution started");
//     console.log("fun4 execution completed");
// }
// fun1();
// setTimeout(fun2,5000);
// setTimeout(fun3,2000);
// fun4();
function fun(){
    console.log("fetching data");
}
let r=setInterval(fun,2000);
setTimeout(()=>clearInterval(r),10000);