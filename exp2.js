// functions
// 1 type no input ,no output
let a=100;
let b=200;
function add(){
let c;
c=a+b;
console.log(c);
}
add();  
// 2 type no input return output
let d=200;
let e=300;
function add1(){
    let f;
    f=d+e;
    return f;
}
 let res= add1();
 console.log(res);
 // 3 type input means passing parameter but no output means return nothing
 function add2(x,y){
    let i;
    i=x+y;
    console.log(i);
 }
 let g=560; 
 let h=290;
 add2(g,h);  //add2(560,290) we  can also directly pass value
 // 4 type passing parameter and get output
 function add3(j,k){
let l;
l=j+k;
return l;
 }
 let m=48;
 let n=60;
 let output=add3(m,n);
 console.log(output);
 //to add two number
function iseven(num){
    let even,odd;
    if (num%2==0)
        return true;
    else
    return false;
}
// let a=2;
let res1=iseven(6);
console.log(res1);



function calculategrade(inputmarks, totalmarks) {
    let percentage = (inputmarks / totalmarks) * 100;
    let studentgrade;

    if (percentage >= 90) {
        studentgrade = 'A';
    } else if (percentage >= 80) {
        studentgrade = 'B';
    } else if (percentage >= 70) {
        studentgrade = 'C';
    } else if (percentage >= 60) { 
        studentgrade = 'D';
    } else {
        studentgrade = 'F'; 
    }

    console.log(studentgrade);
}

calculategrade(72, 100);
calculategrade(82, 100);
// function decalation
 function add4(x,y){
    return x+y;
 }
 console.log(add4(10,20));
 // function expression
 let r=function(u,v){
    return u+v;
 }
 console.log(r(34,78));
 // arrow declaration
 let add5=(w,z)=>
{
    return w+z;
}
console.log(add5(34,98));
// immediately invoked function expression
(function(){
    console.log("immediately running function");
})();
// with parameter
let add6=(function(p,q){
    return p+q;
})(20,89);
console.log(add6)
// pattern of all
//  function add7(a,b){
//     return a+b;
//  } console.log(add7(10,87));
//  let add8=function(c,d){
//     return c+d;
//  }
//  console.log(add8(55,56));
//  let add9 =(e,f)=>{
//     return e+f;
//  } 
//  console.log(add8(2,5));
//  let add=(function(g,h){
//     return g+h;
//  })(20,25);
//  console.log(add);
 