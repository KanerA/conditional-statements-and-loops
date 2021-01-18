let num1=1230;
let num2=123;
smaller=Math.min(num1, num2);
for(let i=smaller; i>0; i--){
    if((num1 % i === 0) && (num2 % i === 0)){
        console.log(i);
        break;
    }
}