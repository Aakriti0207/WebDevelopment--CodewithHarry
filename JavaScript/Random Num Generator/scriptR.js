const mybutton = document.getElementById("button");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
let randomNum1 = 0;
let randomNum2 = 0;
let randomNum3 = 0;
const min = 1;
const max = 6;

mybutton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * (max-min+1)) + min;
    number1.textContent = randomNum1;
    randomNum2 = Math.floor(Math.random() * (max-min+1)) + min;
    number2.textContent = randomNum2;
    randomNum3 = Math.floor(Math.random() * (max-min+1)) + min;
    number3.textContent = randomNum3;
}

