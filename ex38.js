let char = ["Emma frost","iron fist","jeff","moonKnight","Angela"];
//Intha map um just like a forEach mathiri tha loop la once ella tha um exe pannu but ithu la return irrukum forEach la irrukathu return 
//Map 
let arr = char.map( (cElement,index,value)=>{
    console.log(cElement);
    console.log(index);
    console.log(value);
    return {character : cElement};
    
});
console.log(arr);
//forEach
function charList(cElement1,index1,value1){
    console.log(cElement1);
    console.log(index1);
}
char.forEach(charList);