//Destructuring .... in Arrays....

//let arr = [10,15,20,25,30,35,40];
//
//let [a,,,,,,g] = arr;
//console.log(a+g);


let nestArr = [1,2,3,4,5,[10,20,30,[100,200]]];

let [a,b,c,d,e,[a1,a2,a3,[b1,b2]]] = nestArr;

console.log(a+b1,a1,e);