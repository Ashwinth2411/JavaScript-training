//Generator function in js Yield use panni multiple data ulla kudu thu run panna use pannu vanga yatha na irrukoo athana varum....!
// final value irruku na return la thara num apdi thantha { value: undefined, done: trure } ipdi varum....!
let prompt = require('prompt-sync')();
let isPrime = function(n){
    let count = 0;
    for(let i=0;i<n;i++){
        if(n%i==0){
            count++;
        }
    }
    if(count>2){
        //console.log(`The ${n} is not prime`);
        return false;
    }
    else{
        //console.log(`The ${n} is prime`);
        return true;
    }
}

let isPalindrome = function(n){
    let temp = n;
    let sum = 0;
    while(temp>0){
        let last = temp%10;
        sum = (sum*10)+last;
        temp = Math.floor(temp/10);
    }
    if(sum == n){
        //console.log(`The ${n} is Palindrome`);
        return true;
    }
    else{
        //console.log(`The ${n} is not Palindrome`);
        return false;
    }
}

let isArmstrong = function(n){
    let len = n.toString().length;
    let temp = n;
    let sum = 0;
    while(temp>0){
        let last = temp%10;
        sum += Math.pow(last,len);
        temp = Math.floor(temp/10);
        
    }
    if(sum == n){
        //console.log(`The ${n} is Armstrong`);
        return true;
    }
    else{
        //console.log(`The ${n} is not Armstrong`);
        return false;
    }
    
}

let ip = Number(prompt());
function* gen(){
    yield isPrime(ip);
    yield isPalindrome(ip);
    return isArmstrong(ip);
}
let gener = gen();
for(let i=0;i<3;i++){
    //console.log(gener.next()); //.next() nu kudu tha antha funtion nxt nxt exe agum 
    console.log(gener.next().value);// athu ve .next().value nu kudu tha function value mattum exe agum.
}
