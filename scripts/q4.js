let num1 = Number(prompt("Enter First Number"));
let num2 = Number(prompt("Enter Second Number"));
let num3 = Number(prompt("Enter Third Number"));
let num4 = Number(prompt("Enter Fourth Number"));
let num5 = Number(prompt("Enter Fifth Number"));

if(num1>num2 && num1>num3 && num1>num4 && num1>num5){
    alert (num1 +" is the biggest number");
}
else if(num2>num1 && num2>num3 && num2>num4 && num2>num5){
    alert (num2 +" is the biggest number");
}
else if(num3>num1 && num3>num2 && num3>num4 && num3>num5){
    alert (num3 +" is the biggest number");
}
else if(num4>num1 && num4>num2 && num4>num3 && num4>num5){
    alert (num4 +" is the biggest number");
}
else alert (num5 +" is the biggest number");

