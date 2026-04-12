const temp = document.getElementById("temp");
const submit = document.getElementById("submit");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const output = document.getElementById("output");
let value = Number(temp.value)

submit.onclick = function(){
    if(choice1.checked){
        let ans = (value*1.8) + 32;
        output.textContent = `Your converted temp is ${ans}F`;
    }else if(choice2.checked){
        let ans = (value-32)/1.8;
        output.textContent = `Your converted temp is ${ans}C`;
    }else{
        output.textContent = `Please enter valid inputs`;
    }
}