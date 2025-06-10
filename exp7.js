// multdimenstion array
// two dimensonas
let arr=[
    [25,30,22],
    [23,31,24],
    [26,30,20]
]
console.log(arr);
// with help of loop to display one by one data
let i,j;
for(i=0;i<arr.length;i++){
for(j=0;j<arr[i].length;j++){
    console.log(arr[i][j]);
}
}
console.log();
// let i,j; // s used to check the element exist in it or not
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        if(arr[i][j]==31)
        console.log("element find",arr[i][j]);
    }
    }
console.log();
// access A ELEMENT
let value= arr[1][2];
console.log("element access",value);
console.log();
// change or modify element
arr[1][2]=90;
console.log("element modify",arr[1][2]);
console.log();
// find length
let numrow=arr.length;
let numcol=arr[0].length;
console.log(`Rows: ${numrow}, Columns: ${numcol}`);
// three dimensonas
let ar=[
    [
        [50,70],
        [60,67]
    ],
    [
        [85,56],
        [76,90]
    ]
]
let k,l,m;
for(k=0;k<ar.length;k++){
    for(l=0;l<ar[k].length;l++){
        for(m=0;m<ar[k][l].length;m++){
            console.log(ar[k][l][m]);
        }
    }
}
// shallow copy or deep copy
// spread operator
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