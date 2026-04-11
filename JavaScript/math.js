//Built in object used for mathematical operations

console.log(Math.PI);
console.log(Math.E);

//Rounding
console.log(Math.round(4.6));
console.log(Math.floor(4.6));
console.log(Math.ceil(4.6));
console.log(Math.trunc(4.6));

//Absolute
console.log(Math.abs(-10));
console.log(Math.sign(-10));
console.log(Math.sign(10));
console.log(Math.sign(0));

//Powers & Roots
console.log(Math.pow(2,3));
console.log(Math.sqrt(16));
console.log(Math.cbrt(27));

//MIN MAX
console.log(Math.max(10,20,5));
console.log(Math.min(10,20,5));

//Random Numbers
console.log(Math.random()); // from 0 to 0.999...

//Random num bw 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);
//custom range (a to b)
let min = 5 , max = 10;
console.log(Math.floor(Math.random()*(max-min+1)) + min);

//Trigonometry
console.log(Math.sin(0));
console.log(Math.cos(0));
console.log(Math.tan(0));

//logarithmic functions
console.log(Math.log(10));
console.log(Math.log10(100));
console.log(Math.log2(8));