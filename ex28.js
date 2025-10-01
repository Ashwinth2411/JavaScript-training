let person = {
    name : "Ashwin",
    age : 20,
    address : "Villupuram",
    accesory : ["phone","laptop","Earbubs","boom","earPhone"],
    hobbies(){
        console.log("Playing games");
        console.log("Listening Music");
    }
}
// For In 
for(let i in person){
    console.log(person[i]);
}