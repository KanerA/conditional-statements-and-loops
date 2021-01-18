"use strict"
let num1= Number(prompt("enter first number"));
let num2= Number(prompt("enter second number"));

if(num1>num2){
    alert(num1 + " is bigger");
}

else if(num2>num1){
    alert(num2 + " is bigger");
}
else alert("the numbers are equal");