"use strict"
let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));
let num3 = Number(prompt("Enter Third Number"));

let product = num1*num2*num3;
if(product<0){
    alert("the sign is -");
}
else{
    alert("the sign is +");
}