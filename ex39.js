let char = ["naruto","Hinata","sasuke","sakura","Kakashi"];
//Single line la map panni cElemnt la irruku ratha cElement upperCase ahh change panni sort panrom.....!
let arr = char.map(cElement => cElement.toUpperCase()).sort() ;
//intha .fill use panni enna value kudu kuroom mooo  athan full array la um store agum....!
//chaining method....
let arr1 = char.map(cElement => cElement.toUpperCase()).sort().fill("pimbi lika pilai") ;
//arr la sort panna current element arr va store agi irrukum...! Atha thaan print panrom....!
console.log(arr);
console.log(arr1);