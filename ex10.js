//Key generation using the following statement 
//Get input 1 and input 2 and input 3 
//key = (max Thousand of 3 input - min Thousand of 3 input)(max Hundred of 3 input - min Hundred of 3 input)(max Ten of 3 input - min Ten of 3 input)(max unit of 3 input - min unit of 3 input)

let prompt = require('prompt-sync')();
let input1 = prompt("Enter the input1 : ");
let input2 = prompt("Enter the input2 : ");
let input3 = prompt("Enter the input3 : ");
//Seperating thousand from the 3 inputs
let th1 = Math.floor(input1/1000)%10;
let th2 = Math.floor(input2/1000)%10;
let th3 = Math.floor(input3/1000)%10;

//ithu java work agura mathiri work agathu Math.floor pota thaan work agum JS la

let maxThousand = Math.max(th1,th2,th3);
let minThousand = Math.min(th1,th2,th3);

let h1 = Math.floor(input1/100)%10;
let h2 = Math.floor(input2/100)%10;
let h3 = Math.floor(input3/100)%10;

let maxHundred = Math.max(h1,h2,h3);
let minHundred = Math.min(h1,h2,h3);

let t1 = Math.floor(input1/10)%10;
let t2 = Math.floor(input2/10)%10;
let t3 = Math.floor(input3/10)%10;

let maxTen = Math.max(t1,t2,t3);
let minTen = Math.min(t1,t2,t3);

let unit1 = (input1%10);
let unit2 = (input2%10);
let unit3 = (input3%10);

let maxUnit = Math.max(unit1,unit2,unit3);
let minUnit = Math.min(unit1,unit2,unit3);


let key1 = (maxThousand - minThousand); 
let key2 = (maxHundred - minHundred); 
let key3 = (maxTen - minTen); 
let key4 = (maxUnit - minUnit);

let key = (key1*1000) + (key2*100) + (key3*10) + key4;

console.log(`The key value for the given 3 input is ${key}`);
