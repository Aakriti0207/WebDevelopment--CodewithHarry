const increaseBut = document.getElementById("incBut");
const decreaseBut = document.getElementById("decBut");
const resetButton = document.getElementById("resetBut");
const counter = document.getElementById("counter");
let count = 0

increaseBut.onclick = function(){
    count++;
    counter.textContent = count;
}

decreaseBut.onclick = function(){
    count--;
    counter.textContent = count;
}

resetButton.onclick = function(){
    count = 0;
    counter.textContent = count;
}
