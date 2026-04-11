//We can take user input in 2 ways

//Easier way- 
//Using window prompt

let username = window.prompt("What's your username?")
console.log(username);
document.getElementById("myP5").textContent = `username entered is ${username}`

//Professional Way -> HTML Textbox
let StudentId;
document.getElementById("mySubmit").onclick = function(){
    StudentId = document.getElementById("myText").value;
    console.log(StudentId);
    document.getElementById("myP6").textContent = `StudentId entered is ${StudentId}`
}