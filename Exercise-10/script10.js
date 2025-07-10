//Random Buisness Name Generator

let objAdjective = {
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let objName= {
    1: "Engine",
    2: "Food",
    3: "Garment"
}
let objWord= {
    1:"Bros",
    2:"Limited",
    3:"Hub"
}
var ran1 = Math.floor(Math.random()*3) +1;
var ran2 = Math.floor(Math.random()*3) +1;
var ran3 = Math.floor(Math.random()*3) +1;

console.log(objAdjective[ran1] + " " + objName[ran2] + " " + objWord[ran3]);
