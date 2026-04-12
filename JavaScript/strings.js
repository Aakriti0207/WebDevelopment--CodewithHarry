let USERNAME = " AakritiArya ";

console.log(USERNAME.length); //length is not a function - 13
console.log(USERNAME.charAt(5)); // i
console.log(USERNAME.indexOf('k')); //3
console.log(USERNAME.lastIndexOf('a')); //11

console.log(USERNAME.slice(1,7)); //Aakrit
console.log(USERNAME.substring(1,7)); //Aakrit

console.log(USERNAME.toUpperCase()); // AAKRITIARYA 
console.log(USERNAME.toLowerCase()); // aakritiarya

console.log(USERNAME.trim()); //AakritiArya
console.log(USERNAME.trimStart()); //AakritiArya.
console.log(USERNAME.trimEnd()); //.AakritiArya


console.log(USERNAME.replace("Aakriti" , "Aaku")); //.AakuArya.
console.log(USERNAME.replaceAll("a" , "*")); //.A*kritiAry*.

console.log(USERNAME.includes("Arya"));//true
console.log(USERNAME.startsWith("Aak"));//false
console.log(USERNAME.endsWith("Arya"));//false

USERNAME.repeat(4);

let first = "Aakriti";
let last = "Arya";
first.concat("", last);

let str = "apple,banana,mango";
str.split(",");


//Chaining Method
//Capitalises name properly
let playerName = " aakriti";
playerName = playerName.trim();
playerName = playerName.charAt(0).toUpperCase() + playerName.slice(1).toLowerCase();
console.log(playerName); //Aakriti