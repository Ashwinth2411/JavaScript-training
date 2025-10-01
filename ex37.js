let arr = ["Iron man","doctor doom","loki","Spider man"];
//arr.forEach(printArr);  // ithu vanthu oru for mathiri thaan atha oru oru value um index value nu functions use panni printpanrathu loop la thaan exe agum...
function printArr(currentValue,index,totalArray){
    console.log(currentValue);//current value va print pannum
    console.log(index);//Current value oda index ahh print pannum
    console.log(totalArray);//Total value in Array va umm print pannum
}
arr.forEach(printArr);//Itha before function and after function yanga venna declare pannalaam error illama print pannum.....
