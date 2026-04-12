function generate(passwordlen, upperCase, lowerCase, symbols, numbers){
    const upperalpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const loweralpha = "abcdefghijklmnopqrstuvwxyz";
    const inclsymbols = "!@#$%^&*";
    const inclnumbers = "1234567890";

    let allowedchars = "";
    let password = "";

    allowedchars += upperCase ? upperalpha : "";
    allowedchars += lowerCase ? loweralpha : "";
    allowedchars += symbols ? inclsymbols : "";
    allowedchars += numbers ? inclnumbers : "";

    if(passwordlen <=0){
        console.log("password length must atleast be 1");
    }
    if(allowedchars.length === 0){
        console.log("atlease 1 format must be allowed");
    }
    for(let i=0 ; i<=passwordlen ; i++){
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }
    return password;
}

let upperCase = true;
let lowerCase = true;
let symbols = true;
let numbers = true;

let passwordlen = 10;


const password = generate(passwordlen, upperCase, lowerCase, symbols, numbers);
console.log(`Generated Password: ${password}`);