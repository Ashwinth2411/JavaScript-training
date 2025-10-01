let arr = [100,20,3,4000,5];

//Normal array reduction logic thaan......

let total = 0;
for(let i=0;i<arr.length;i++){
    total += arr[i];
}
console.log("Normal function to reduce an array....!");
console.log(total);


console.log("================================================================");

//Normal array mathiri illa function ahh use panni array reduce panrathu....using "reduce function"-----> arr.reduce()
//ithu la forEach and map mathiri illa ma ithu la 4 irrukum....
//accumulator and cElement and index and array 

let total1 = arr.reduce( (acc,cEle,index,val)=>{return acc+cEle},0);
console.log("Reduce function  .reduce use panni panathu...!");
console.log(total1);