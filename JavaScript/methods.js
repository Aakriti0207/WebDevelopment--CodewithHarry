//We study about 4 kinds of methods here in js

/*
1. forEach() Method
2. map() Method
3. filter() Method
4. reduce() Method
*/


//forEach Method - Iterate over an array and specify a function on EACH element

//Displaying cube of all elements 
let numbersFM = [1,2,3,4,5];
numbersFM.forEach(cube);
numbersFM.forEach(display); 

function cube (element, index, array){
    array[index] = element ** 3;
}

function display (element){
    console.log(element);
}

let fruits = ["mango" , "orange" , "apple"];

fruits.forEach(capitalise);
fruits.forEach(display);

function capitalise (element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice[1].toLowerCase();
}

//Map() method
//similar to forEach- it just generates and Entirely new array of ans

const NumMap = [1,2,3,4,5];
const square = NumMap.map(squareEle);
console.log(square);

function squareEle (element){
    return element ** 2;
}

const dates = ["04-14-2026", "04-15-2026", "04-16-2026"];

const formatted = dates.map(formatting);
console.log(formatted);

function formatting(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[0]}/${parts[2]}`;
}

//filer() method
//Retruns a new array with elements that specify a condition

//evenNumbers
const numFil = [1,2,3,4,5];

let evenNum = numFil.filter(isEven);
console.log(evenNum);

function isEven(element){
    return (element % 2 === 0);
}

//Filter out adults 
const ages = [12,25,30,15,18];

let adults = ages.filter(isAdult);
console.log(adults);

function isAdult(element){
    return (element > 18);
}

//Reduce() Method
//reduce the elements of an array to a singular value

const prices = [5,30,10,25,15,20];

let total = prices.reduce(sum);
console.log(total);

function sum(previous,current){
    return previous + current;
}

//Find max from array of grades in similar way