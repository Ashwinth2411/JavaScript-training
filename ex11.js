//Array declaration using the user inpput storage capacity
//OP :  [ '11', '12', '13', '14', '15' ]
const prompt = require('prompt-sync')();
let a = prompt();
let arr = [];
for(let i=0;i<a;i++){
    arr.push(prompt());
}
console.log(arr);

// Arrray creation using the inbuilt data by using the space or comma
//let a = prompt();
//let arr = a.split(",").map(Number);
//console.log(arr);