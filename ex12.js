let prompt = require('prompt-sync')();
let a = 5;
let arr = [];
for(let i=0;i<a;i++){
    arr.push(prompt());
}
let count = 0;
for(let j=0;j<arr.length;j++){
    if(arr[j]%2==0){
        count++;
        console.log(arr[j]);
    }
}
console.log(count);
