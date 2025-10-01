//String la object value and variable la acces pannarathu...'
let name = "Naruto";
let age = 32;
let address = "leaf Village";
let powers = "Addons";

let character = {
    name,
    age,
    address,
    ['powers'] : "Rasen shurikan",
    [powers] : "Rasengan"
}
console.log(character);
console.log(character.powers)