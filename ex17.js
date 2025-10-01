// let prompt = require('prompt-sync')();
let size = parseInt(prompt());
let arr = [size];
for(let i=0;i<size;i++){
    arr[i] = parseInt(prompt());
}
function isPrime(num){
    if(num<2)return false;
    if(num==2)return true;
    else{
        for(let i=2;i*i<=num;i++){
            if(num%i==0)return false;
        }
        return true;
    }
}
let prime = 0;
for(let num=1;num<=size;num++){
    if(isPrime(arr[num])){
        console.log(arr[num]);
    }
    
}