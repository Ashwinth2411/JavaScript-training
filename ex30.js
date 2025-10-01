let Ironman = {
    Hero : "Tony Stark",
    Heroine : "Pepper pods",
    frd : "Happy Hogan",
    Frd2 : "Roodie",
    villan : "Hex Tech",
    teamUP : ["black widow","war Mission","Happy","pepper"],
    power(){
        console.log("The power from arc reactor to ironman suit");
    },
    suit : "mark 48"
}

let captian = {
    Hero1 : "Steve Rorgers",
    Heroine1 : "Peggy carter",
    frd1 : "Bucky",
    Frd21 : "sam wilsan",
    villan1 : "red skull",
    teamUP1 : ["black widow","sam wilson","Hackie","Ant man"],
    power1(){
        console.log("The power from the super soldier cerum and vibranum shield");
    },
    suit1 : "Blue captain suit"
}

let Avengers = {...Ironman,...captian};

console.log(Avengers);