//let arr = [1,2,3,4,5];
//for(let i of arr){
//    console.log(i);
//}

//let char = "jillo";
//for(let i of char){
//    console.log(i);
//}



//For of


function* generator(){
    yield  "Hello"
    yield  "Friends"
    yield  "Subscribe"
    return  "Pannunga";
}
let func = generator();
//console.log(func.next());

for(let i of func){
    console.log(i);
}