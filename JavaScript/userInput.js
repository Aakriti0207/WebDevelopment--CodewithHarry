//We can take user input in 2 ways

//Easier way- 
//Using window prompt

let username = window.prompt("What's your username?")
console.log(username);

//Professional Way -> HTML Textbox
let StudentId;
document.getElementById("mySubmit").onclick = function(){
    StudentId = document.getElementById("myText").value;
    console.log(StudentId);
}