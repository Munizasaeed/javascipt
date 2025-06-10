// hoisting in javascript and scope ,object oriented,pass by value or
// hoisting
//let a;
// console.log(a);
// let a;
m();
function m(){
    console.log("hello")
}
// let a=9;
// console.log(a);
// greet();
// var greet=()=>{ // function expression and arrow are not hosited 
//     console.log("hey");
// }
let a;
console.log(a);
a=100;
console.log(a);
// let b;
// function add(){
//     console.log(b);
// }
// b=1010;
// console.log(b)
// add();
let b; // both are same and give same output gobal variable
b=1010;
console.log(b)
function add(){
    console.log(b);
}
add();
// function scope
function fun(){
    let c=29;
    console.log(c);  
}
fun();
// console.log(c);
// block scope;
let temp=20;
if(temp>=25){
    var coolingtemp=temp-25;
    console.log("server room need to be cooled down",coolingtemp);
}
else{
    var heatingtemp=25-temp;
    console.log("server room need to be heating down",heatingtemp);
}
console.log(temp);
console.log(coolingtemp); // because cooling and heating temp goes to next scope which is golbal
console.log(heatingtemp);
function print(num){
    
    for(var i=1;i<=num;i++){
        console.log(i);
    }
    console.log("final value of i=",i)
}
console.log(print(7));
// object oriented literal notation
let car={
    name:"bmw",
    cost:78.9,
    mileage:6,

    start:function(){
console.log("car is start")
    },
    stop:function(){
        console.log("car is stop")
            },
            accerate:function(){
                console.log("car is acceralte")
                    }
};
console.log(car.name);
console.log(car.cost);
car.start();
car.stop();
let student={
    name:"umer",
    grade:"B+",
    age:18,

    coding:function(skill){
        console.log("student are good in coding:",skill) // passing parameter
    },
    singing:function(){
        console.log("student are good in singing")
    },
    dancing:function(){
        console.log("student are good in dancing")
    }
};
console.log(student.name);
console.log(student.age);
console.log(student.grade);
student.coding("javascipt");
student.singing();
student.dancing();
// pass by value
let i=100;
let j;
j=i;
console.log(j);
console.log("value of i",i);
j=200;
console.log(j);
console.log("value of i",i);
// pass by refrence
let ad={
    name:"civic",
    cost:78.9,
    milage:6,
}
console.log(ad.name);
console.log(ad.cost);
console.log(ad.milage);
let ad1;
ad1=ad;
console.log(ad1.name);
console.log(ad.cost);
console.log(ad.milage);
ad1.name="kia";
console.log(ad1.name);
