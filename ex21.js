//Printing Random Number for the game............................
let prompt = require('prompt-sync')();
console.log("Guess the number in computer mind");
let n = prompt("Number : ");
let rand = Math.floor(Math.random()*10);

if(rand == n){
    console.log(`The random number is ${rand}...You Win...`);
}
else{
    console.log(`The random number is ${rand}...You LOOSe...`);
}
