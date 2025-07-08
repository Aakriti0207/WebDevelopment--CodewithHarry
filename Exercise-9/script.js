/* Create a faulty calculator using js.
This faulty calculator does following :
1.It takes two numbers as input from the user.
2.It performes wrong operations as follows:
+ --> -
* --> +
- --> /
/ -->**
it performs wrong operator 10% of the times */

const faultyCalc = (a, b, op) => {
    console.log("Num1 is- " + a);
    console.log("Num2 is- " + b);
    console.log("Operator is- " + op);

    let random = Math.random;
    if (random < 0.1) {
        switch (op) {
            case '+':
                console.log(a - b);
                break;
            case '-':
                console.log(a / b);
                break;
            case '*':
                console.log(a + b);
                break;
            case '/':
                console.log(a ** b);
                break;
            default:
                console.log("Operator does not exist");
        }
    } else {
        switch (op) {
            case '+':
                console.log(a + b);
                break;
            case '-':
                console.log(a - b);
                break;
            case '*':
                console.log(a * b);
                break;
            case '/':
                console.log(a / b);
                break;
            default:
                console.log("Operator does not exist");
        }
    }
}

//Example Call
faultyCalc(5, 3, '+');
const prompt= require("prompt-sync")();
let a= prompt("Enter first number- ");
let b=prompt("Enter Second Number- ");
let op=prompt("Enter the operator(+,-,*,/)-  ");
faultyCalc(a,b,op);