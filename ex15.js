// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let n = 5;
let sum = 0;
let arr = [];
for(let i=0;i<(n-1);i++){
    let value = parseInt(prompt());//parseInt(prompt()) use panni int user input vanga use agum
    arr.push(value);//itha use panni thaan array la value add panna mudiyum value nu mla declare panna maathiri
}
for(let i=0;i<(n-1);i++){
    sum += arr[i];//ithu java panna mathiri thaan increment pannum
}
let ans = Math.floor(n*(n+1))/2;//Math.floor pootalum poda la nalum inga onnum illa but % and / onna use panna podanum
console.log(ans-sum);
