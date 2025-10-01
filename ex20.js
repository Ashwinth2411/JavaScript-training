let prompt = require('prompt-sync')();
let  num = parseInt(prompt());
let sum = 0;
while(num>0){
    let last = num%10;
    num = parseInt(num/10);
    console.log(last);
}