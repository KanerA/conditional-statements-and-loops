let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));
let num3 = Number(prompt("Enter Third Number"));

if(num1>num2 && num1>num3){
    if(num2>num3) alert(num1 +", "+num2 +", " +num3);
    else alert(num1 +", "+num3 +", " +num2);
}
else if(num2>num1 && num2>num3){
    if(num1>num3) alert(num2 +", "+num1 +", " +num3);
    else alert(num2 +", "+num3 +", " +num1);
}
else {
    if(num1>num2) alert(num3 +", "+num1 +", " +num2);
    else alert(num3 +", "+num2 +", " +num1);
}