const { NONAME } = require("node:dns");

// closures ,this use, function not use this, callback
function outerfunction(){
    console.log(" outer function start excution")
    let outvar=10;
    function innerfunction(){
        console.log(" inner function started  excution");
        console.log("outer function value"+outvar);
        console.log("inner function finished  excution");
    }
    console.log("outer function finished  excution");
    return innerfunction;
}
let exmp=outerfunction();
exmp();
// we can directly  run it without giving the nameq
// function outerfunction(){
//     console.log(" outer function start excution")
//     let outvar=10;
//     console.log("outer function finished  excution");
//      return function (){
//         console.log(" inner function started  excution");
//         console.log("outer function value"+outvar);
//         console.log("inner function finished  excution");
//     }
// }
// let exmp=outerfunction();
// exmp();
// this use
let user={
    name:"umer",
    age:23,

    message:function(){
console.log(`${this.name}`);
console.log(`age :${this.age}`);
// console.log(this); // show the current context
    }
};

 user.message();
// function chai(){ this is not used in function and arrow
//     let username="hitesh";
//     console.log(this.username);
// }
// chai();
 let add=(num1,num2)=>({username:"ahmad"}) // return object need ()
console.log(add(3,7));

//  passing function as argument to other function

// function exmp2(fun){
// //  let res =fun(34,3);
// //  console.log(res); both way is corrected res store is important otherwise input is not show
// console.log(fun(34,3));
// }
// function sub(a,b){
//     return a-b;
// }
// exmp2(sub);  
function exmp2(sub){
  console.log("done ")
  console.log(sub(34,31)); // above same program in diiferent method
  sub()
  }
  function sub(a,b){
      return a-b;
  }
  exmp2(sub); 
// callback
  function add4(c,d){
return c+d;
  }  
  function sub2(c,d){
    return c-d;
      }  
      function mul(c,d){
 return c*d;
  }
 function cal(c,d,callback){
  return callback(c,d)
 }
 console.log(cal(12,34,add4));  
 console.log(cal(12,34,sub2));
 console.log(cal(12,34,mul));
 // onther example of callback
 function circlearae(radius){
    return Math.PI*radius*radius;
 }
 function squarearea(side){
    return side*side;
 }
 function equaltriangearae(side){
    return(Math.sqrt(3)/4)*side*side;
 }
 function calculatearea(value, callback1){
    return callback1(value);
 }
 console.log(calculatearea(5,circlearae));
 console.log(calculatearea(5,equaltriangearae));
 console.log(calculatearea(5,squarearea));
 // onther simple EXAMPLE
 function frienda(friendb){
console.log("frienda is  working")
friendb();                                                            
}

 function friendb(){
  console.log("friendb is  working")
   }
frienda(friendb);
      
