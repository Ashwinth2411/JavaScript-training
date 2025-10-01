let prompt = require('prompt-sync')();
let n = Number(prompt());
let arr = [];
for(let i=0;i<n;i++){
    arr.push(prompt());
}
let assending = arr.sort((a,b)=>a-b);
let desending = arr.sort((a,b)=>b-a);
console.log(assending);
console.log(desending);