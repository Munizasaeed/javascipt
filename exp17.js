//  task of array
// let sum=0;
// let marks=[85,97,44,37,76,60];
// for (let val of marks){
//     sum=sum+val;
   
// }
// let b=sum/marks.length;
//  console.log(sum);
// console.log(`average marks of class:${b}`);

// task 2
let discount = 0.10;
let prices = [250, 645, 300, 900, 50];

for (let i = 0; i < prices.length; i++) {
    let off = prices[i] * discount;   // discount amount
    prices[i] = prices[i] - off;      // apply discount
}

console.log(prices);

// task 3
// let m=['muniza','sidra','iqra'];
// let j=['umer','ahmad'];
// let k=m.concat(j);
// console.log(k);
// console.log(m);
// console.log(j);

let l=['muniza','sidra','iqra','umer'];

// console.log(l.slice(1,3))
// delete
l.splice(2,1,);
// add
// l.splice(2,0,'ahmad');
// replace
l.splice(3,1,'ahmad')
console.log(l);

//  task
let company=['Bloomberg','microsoft','uber','google','ibm','netflix']
// remove the first company
company.shift();
console.log(company);
// remove uder and add ola in its place
company.splice(1,1,'ola');
console.log(company);
// add amazaon at the end
company.push('amazaon');
console.log(company);
// Create a student object {name, age, marks} → print details → update marks.
let student={
    name:"muniza",
    age:20,
    marks:87,
}
console.log(student);
student.marks=90;
console.log(student);


