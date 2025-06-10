// array
let   a=[2,4,5.1,"muniza"];
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
// console.log(a.join(',')); // this is used to print 'a' without [] 2,4,5.1,muniza like this
console.log(a); 
// using array contsuctor
let arr=new Array(5);
 arr=[10,20,30,40,50]; // both are same method
//  arr[1]=20;
//  arr[2]=30;
//  arr[3]=40;
//  arr[4]=50;
 console.log(arr);
 // loop with array

 let b=new Array(5);
b=[10,20,30,40,50];
 let i;
//  for(i=10;i>=0;i--) reverse the number if
 for(i=0;i<b.length;i++){
console.log(b[i]);
 }
 // for of loop
 console.log();
 let c=new Array(5);
c=[1,2,3,4,5];
for(let x of c){
    console.log(x)
}
// method or function in array
let e=[10,20,30,40,50];
console.log(e);
e.push(60);
console.log(e);  
// e.unshift(70); // add at the  start
// console.log(e);
let x=e.pop();
console.log(x);
console.log(e);
let w=e.shift(); // remove from start and give variable to store
console.log(w);
console.log(e);
// let y=e.splice(2,2); // remove element in between
// console.log(" remove element ",y);
// console.log(e);
// e.splice(2,0,90); // add element at index 2 90
// console.log(e);
// e.splice(2,1,90); // delete element at index 2 and add 90 at index 2;
// console.log(e);
 let v=e.splice(2,2,70,80);
 console.log("remove element and add ",v);
 console.log(e);
 let r =e.indexOf(80);
 console.log("index of 80:",r) // give index
 let m=[10,20,30,40,50,30]; 
 console.log(m.lastIndexOf (30)); // give 1 occurane
 console.log(m.includes(90));
// array method
// map method
// let number=[1,4,9,16];
// function squareroot(x){
//      return Math.sqrt(x);
// }
// let result=number.map(squareroot)
// console.log(number);
// console.log(result);
// another method
let number=[1,4,9,16];
let result= number.map( (x)=>
{
    return Math.sqrt(x);
});
console.log(number);
console.log(result);
// flter
// let age=[13,45,35,2]
// function checkage(y){
//     if (y>18){
//         return true;
//     }
//     else
//     return false;
// }
// let result1=age.filter(checkage);
// console.log(age);
// console.log(result1);
// another method
let age=[13,45,35,2]
    let result1=age.filter((y)=>{
    if (y>18){
        return true;
    }
    else
    return false;
});

console.log(age);
console.log(result1);
// reduce method
// let number1=[1,4,9,16];
// let res=number1.reduce((total,x)=>total+x,0);
// console.log(number);
// console.log(res);
// another
let number1=[1,4,9,16];
function total(total,x){
    return  total=total+x; 
}
let res=number.reduce(total,0)
console.log(number);
console.log(res);
// some method
// let score=[23,89,87,56];
// let grade=score.some((x)=>x>85);
// console.log(score);
// console.log(grade);
// another
 let score=[23,87,76,56];
 function score1(x){
    if(x>85)
        return true
    else
    return false
 }
 let grade=score.some(score1)
 console.log(score);
 console.log(grade);
 // every method
 let marks=[53,87,76,56];
 let res1=marks.every((x)=>x>=50);
 console.log(marks);
 console.log(res1);
 // find method
 let mark1=[53,57,76,86];
 let res2=mark1.find((x)=>x>70);
 console.log(mark1);
 console.log(res2);
 let res3=mark1.findIndex((x)=>x>70);
 console.log(res3);
 // sort 
 let fruit=["banana", "apple","pear","kiwi"]
 console.log(fruit);
 fruit.sort();
 console.log(fruit);
 let mark2=[53,45,70,26];
 console.log(mark2);
 mark2.sort();
 console.log(mark2);
 
