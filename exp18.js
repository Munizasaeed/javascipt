function myfunction(){
    console.log('we are learning js')
}
myfunction();
function hello(mess){           
console.log(mess)
};
// parrameter --> input
hello('we are working on function');
hello(2005);

function sum(a,b){
    console.log(a+b)
}
sum(121,45);
const arrowSum=(c,d)=>{
return(c+d)
}
let y=arrowSum(3,9);
console.log(y);

function vowel(str) {
    let count = 0;

    for (let i of str) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            count++;
        }
    }

    console.log(count);
}

vowel("muniza");

const vow=(str)=>{
     let count = 0;

    for (let i of str) {
        if (i === "a" || i === "e" || i === "i" || i === "o" || i === "u") {
            count++;
        }
    }
    console.log(count);
}
vow("munizasaeed");

let arr=[1,2,3,4,5]

arr.forEach(function printvalue(value){
    console.log(value);
})
let arr1=['sidra','muniza','umer']
arr1.forEach((value ,index)=>{
    console.log(value.toUpperCase() ,index);
})
//  for each not return a new array
let num=[1,2,3,4]
const square=(num)=>{
    console.log(num*num);
}
num.forEach(square);
// map return a new array
let arr2=[12,13,14]
let k=arr2.map((val)=>{
   return val*2;
  
})
  console.log(k);
console.log(arr2);
// filter
let arr3=[1,2,3,4,5,6,7]
const l=arr3.filter((val)=>{
   return val%2==0;
})
console.log(l);
// we can also write like this
// let arr3=[1,2,3,4,5,6,7]
// const o=(val)=>{
//    return val%2==0;
// }
// let evenNumbers =arr3.filter(o);
// console.log(evenNumbers);

// reduce
let arr4=[1,2,3,4]
const sum1=arr4.reduce((res,cur)=>{
return res+cur;
})
console.log(`total sum is :${sum1}`);   
console.log(arr4);

let arr5=[1,2,3,4]
const greater=arr5.reduce((res,cur)=>{
return res>cur ?res:cur;
})
console.log(`greater number is :${greater}`);   
console.log(arr4);


// task
const marks=[60,58,90,34,99,93];
const highest=marks.filter((val)=>{
    return val>90;
})
console.log(highest);
// 2 task
const readline = require("readline-sync");
let number=Number(readline.question(`Enter the number:`));
let arr6=[];
for (let i=1;i<=number;i++){
  arr6[i-1]=i;
}
  
console.log(arr6);
const sum2=arr6.reduce((pre,cur)=>{
    return pre+cur;
})
console.log(sum2);
const product=arr6.reduce((pre,cur)=>{
    return pre*cur;
})
console.log(product);

 