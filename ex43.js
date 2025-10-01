//String Manipulation....



//let arr = [1,2,3,4,5];
//let total = 0;
//let arr1 = arr.reduce((acc,cEle,inital,value)=>{return acc},0)
//console.log(arr1);


let arr = [{Name : "Ashwin",Id : 15},{Name : "Shivan",Id : 5},{Name : "Parvathi",Id : 3}];
let calcId = arr.reduce((acc,cEle,index,array)=>{return acc+cEle.Id},0);
console.log(calcId);
