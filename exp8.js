// shallow copy or deep copy
// spread operator shallow copy
let ar2=[10,20,30,40];
console.log(ar2);
let ar3=[...ar2];
console.log(ar3);
ar2.push(99);
console.log(ar2);
console.log(ar3);
console.log();
//  slice()
let ar4=[1,2,3,4];
console.log(ar4);
let ar5=ar4.slice();
console.log(ar4);
ar4.push(99);
console.log(ar4);
console.log(ar5);
// nested array
// let ar6=[[23,56],[67,98]];
// console.log(ar6);
// let ar7=ar6.slice();
// console.log(ar7);
// ar6[1].push(99);
// console.log(ar6);
// console.log(ar7);
// spread operator same code wth spread operator
let ar6=[[23,56],[67,98]];
console.log(ar6);
let ar7=[...ar6]
console.log(ar7);
ar6[1].push(99);
console.log(ar6);
console.log(ar7);
console.log();
// deep copy
let ar8=[[23,56],[67,98]];
console.log(ar8);
let ar9=structuredClone(ar8);
console.log(ar9);
ar8[1].push(99);
console.log(ar8);
console.log(ar9);
// another example in object literals
let ar10=[{name:"umer"},{name:"ben"}];
console.log(ar10);
let ar11=[...ar10]
console.log(ar11);
ar10[0].name="rohit"
console.log(ar10);
console.log(ar11);
console.log();
// deep copy
let ar12=[{name:"umer"},{name:"ben"}];
console.log(ar12);
let ar13=structuredClone(ar12);
console.log(ar13);
ar12[0].name="rohit"
console.log(ar12);
console.log(ar13);

// string
let s1="hello";
let s2='umer';
`hi,${s2}`;
console.log(s2);
let s3="javasciprt";
let s4="java";
console.log((s3==s4));
let s5="JAVA";
console.log((s4==s5));
let s6="javasciprt";
let s7="javasciprt";
console.log((s6==s7));
let s8=new String("javasciprt");
console.log((s6===s8));
console.log(typeof s6);
console.log(typeof s8);
console.log(s6[2]);
s6[2]="V";
console.log(s6[2]);
// string methods
let userinput="   umer    |   UMERexample.Com |    javascirpt developer and coffee lover !";
let parts =userinput.split("|");
console.log(parts);
let name=parts[0].trim();
console.log(name);
console.log(parts[0]);
let email=parts[1].trim();
console.log(email);
console.log(parts[1]);
let bio=parts[2].trim();
console.log(bio);
console.log(parts[2]);