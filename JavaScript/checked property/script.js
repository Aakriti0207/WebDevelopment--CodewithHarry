const tick1 = document.getElementById("myradio1");
const tick2 = document.getElementById("myradio2");
const tick3 = document.getElementById("myradio3");
const check = document.getElementById("mycheck");
const button = document.getElementById("mybtn");
const output = document.getElementById("output")

button.onclick = function(){
    if(!check.checked){
        output.textContent = "check the tnc pls";
        return;
    }
    if(tick1.checked){
        output.textContent = "proceed with UPI";
    }else if(tick2.checked){
        output.textContent = "proceed with MasterCard";
    }else if(tick3.checked){
        output.textContent = "proceed with COD";
    }else{
        output.textContent = "Please select a valid payment method";
    }
}