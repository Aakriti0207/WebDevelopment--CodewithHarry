const input = document.getElementById("myInput");
const submit = document.getElementById("mySubmit");
const output = document.getElementById("output");
let age
submit.onclick = function(){
    age = input.value;
    age = Number(age);
    if(age >= 18){
        output.textContent = "You are an adult";
    }else if (age < 18 && age >= 13){
        output.textContent = "You are a teenager";
    }else if(age < 13){
        output.textContent = "You are still a child";
    }else{
        output.textContent = "Invalid age, please re-enter";
    }
}