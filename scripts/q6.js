let myArray= [80, 77, 88, 95, 68];
let average=0;

for(let i=0; i<myArray.length; i++){
    average+= myArray[i];   
}
average/=myArray.length;
if(average<= 60){
    alert("The grade is \"F\"");
}
if(average>= 60 && average<70){
    alert("The grade is \"D\"");
}

if(average>= 70 && average<80){
    alert("The grade is \"C\"");
}

if(average>= 80 && average<90){
    alert("The grade is \"B\"");
}

if(average>= 90){
    alert("The grade is \"A\"");
}

