let radius;
const PI = 3.14;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `The Circumference of your circle is ${circumference} cm`;
}