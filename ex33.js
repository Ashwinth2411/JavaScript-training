let arr1 = [1,2,3,4,5];
let arr2 = [10,20,30,40,50];

let newArray = arr1.concat(arr2);
console.log(newArray);
arr1 = arr1.concat(6,7,8,9);
newArray = arr1.concat(arr2);
console.log(newArray);