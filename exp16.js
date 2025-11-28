
const readline = require("readline-sync");
let number=[];
let total=0;
for(let i=1;i<=5;i++){
   let num = Number(readline.question(`Enter the number${i}:`));
    number.push(num);
    total=total+num;
}

let largest=Math.max(...number);
let smallest=Math.min(...number);
console.log("Numbers entered:",number);
console.log("Sum:", total);
console.log("Largest number:",largest);
console.log("Smallest number:",smallest);

//  task print all even number
let n=100
for(i=0;i<=n;i++){
    if(i%2==0){
         console.log(`even number:${i}`)
    }
   
   
}

// task 2
let game_no=5;
 const readline = require("readline-sync");
  let num = Number(readline.question(`Guess the Game no:`));
 while(num !== game_no)
 {  
      num = Number(readline.question(`Wrong no Guess the  no again:`));
  }
  console.log('congratulation you guess the number');