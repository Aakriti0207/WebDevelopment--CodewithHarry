let fullName = "Aakriti Arya"
let rollNumber = 59
let pass = true
let salary = null
let degree = undefined
const collegeName = "BPIT"; //Value cannot be changed now
//collegeName = "IIIT Delhi" -> error
let mobileNum = "9205083279" // numbers above 10-15 digits or phno. should be in ""

//We don't use "Var" due to its scope problems
//Const - constant value

document.getElementById("myH1").textContent = `Your name is ${fullName}`; //Backticks and dollar sign -> template literal
document.getElementById("myP1").textContent = rollNumber;
document.getElementById("myP2").textContent = pass;
document.getElementById("myP3").textContent = mobileNum;
document.getElementById("myP4").textContent = collegeName;


console.log(typeof salary) //object
console.log(typeof degree) //undefined

