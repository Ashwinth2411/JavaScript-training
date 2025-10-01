// printing the clostest number in the input
let prompt = require('prompt-sync')();
let n1 = prompt();
let n2 = prompt();
if(n1>=0){
    while(n1%n2!=0){
        n1--;
    }
}
else{
    while(n1%n2!=0){
        n1--;
    }
}
console.log(n1);