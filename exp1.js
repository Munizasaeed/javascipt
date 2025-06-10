// let user="editor";
// switch(user){
// case "admin":
//     console.log("full access granted to admin")
//     break;
//     case "editor":
//     console.log("full access granted to editor")
//     break;
//     case "author":
//     console.log("full access granted to author")
//     break;
//     case "students":
//     console.log("full access granted to students")
//     break;
//     default:
//     console.log("access denied")
// }
// let day=3;
// switch(day){
//         case 0:
//         case 6:
//         console.log("happy weekend")
//         break;
//         case 1:
//         console.log("happy monday")
//         break;
//         case 2:  //grouped together because their output is same
//         case 3:
//         case 4:
//         console.log("happy midweek")
//         break;
//         case 5:
//         console.log("happy friday")
//         break;
// }
// let age=10;
// let message;
// message=age>=18?"can vote":"can not vote"
// console.log(message)
// let score=60;
// let result;
// result=score>=50?"pass":"fail";
// console.log(result);
// let i;
// for(i=1;i<=5;i++)
// { process.stdout.write(" * "); // to print on same line console.log means new line
// }
// let j=1;
// while(j<=5){
//    console.log("*");
//     j++;
// } 
// let k=1;
// do{
//    process.stdout.write(" * ");
//     k++;
// }
// while(k<=5);
// console.log();
// //  pattern 
// let a,b,row;
// let n=5;
// for(a=1;a<=n;a++){
//     row=" ";
//     for(b=1;b<=n;b++){
//         row=row+"*";
//     }
//     console.log(row);
// } 
// console.log();
// let m=7;
// let c,d;
// for(c=1;c<=m;c++){
//     let line="";
//     for(d=1;d<=m;d++){
//         if(c==1 ||c==m ||d==1||d==m){
//             line=line+"*";
//         }
//         else{
//             line=line+" ";
//         }
//     }
//     console.log(line);
// }
let p=16;
let e,f;
for(e=0;e<=p-1;e++){
    let line="  ";
    for(f=0;f<=p-1;f++){
        if(e==0 || e==Math.floor(p/2)||e+f==p-1||e==p-1||e==f ||f==0||f==p-1
      || f==Math.floor(p/2) ||e+f==Math.floor(p/2) || e-f==Math.floor(p/2)
    || e+f==(p-1)+(Math.floor(p/2))|| f-e==Math.floor(p/2)){
            line=line+"*";
        }
        else{
            line=line+" ";
        }
    }
    console.log(line);
}
console.log();
let g,h;
let q=5;
for(g=1;g<=q;g++){
    let col=" ";
for(h=1;h<=g;h++){
    col=col+ "*";
}
console.log(col);
}
console.log();
let i,j;
let r=5;
for(i=1;i<=r;i++){
    let l1=" ";
    for(j=1;j<=r;j++){
        let number = (i - 1) * r + j;
         l1 += number + " ";
    }
    console.log(l1);
}
let l,k;
let s=5;
let countnumber=15;
for(l=1;l<=s;l++){     
    let col=" ";
for(k=1;k<=l;k++){
    col=col+countnumber+" ";
    countnumber--;
}
console.log(col.trim());
}
