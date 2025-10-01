// Array Methods.....
//-----> push()  ====> push ahh use panni array last la element insert panalaam
//-----> pop() ====> pop ahh use panni array la last element ahh remove panalaam
//-----> shift() ====> shift ahh use panni array la first element ahh remove panalaam
//-----> unshift() ====> unshift ahh use panni array la first la element ahh add panalaam
//-----> splice() ====> splice ahh use panni add umm panna laam remove um pannalaam
//                       add & remove ---> arr.splice(index,position,element1,element2,....element n);

let arr = [1,2,3,4,5];
arr.push(10,20,30);
console.log(arr);
let popArray = arr.pop();
console.log(popArray);
console.log(arr);
let shiftArray = arr.shift();
console.log(shiftArray);
console.log(arr);
arr.unshift(10000);
console.log(arr);
arr.splice(1,2);
console.log(arr);
arr.splice(1,2,3000,40000,5000);
console.log(arr);


// Array methods Impleentation.......!


