
//Palindrome
let isPalindrome = (n) => {
    let temp = n;
    let sum = 0;
    while(temp>0){
        let last = temp%10;
        sum = (sum*10)+last;
        temp = Math.floor(temp/10);
    }
    if(sum == n){
        console.log(`The given ${n} is Palindrome`);
    }
    else{
        console.log(`The given ${n} is Palindrome`);
    }
}
//Armstrong
let isArmstrong = (n) =>{
    let temp = n;
    let len = n.length;
    let sum = 0;
    for(let i=0;i<len;i++){
        let last = temp%10;
        sum = (sum*10)+Math.pow(last,len);
        temp = Math.floor(temp/10);
    }
    if(sum == n){
        console.log(`The given ${n} is Armstrong`);
    }
    else{
        console.log(`The given ${n} is not Armstrong`);
    }
}
//isPrime
let isPrime = function(n){
    let count = 0;
    for(let i=0;i<n;i++){
        if(n%i==0){
            count++;
        }
    }
    if(count > 2){
        console.log(`The given ${n} is Not Prime`);
    }
    else{
        console.log(`The given ${n} is Prime`);
    }
}

let prompt = require('prompt-sync')();

console.log(`=================================================`);
console.log(`choose the Option for the Solution`);
console.log(`1 : Palindrome`);
console.log(`2 : Armstrong`);
console.log(`3 : Prime`);
let choice = Number(prompt());
switch(choice){
    case 1 :
        let ip = Number(prompt());
        isPalindrome(ip);
        break;
    case 2:
        let ip1 = Number(prompt());
        isArmstrong(ip1);
        break;
    case 3 :
        let ip2 = Number(prompt());
        isPrime(ip2);
        break;
    default:
        break;
}
console.log(`=================================================`);
