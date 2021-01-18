function happy_number(num){
    let sum, digit ;
    let count = [] ;
    while(num != 1 && count[num] !== true){
        count[num] = true ;
        sum = 0 ;
        while (num > 0) {
            digit = num % 10 ;
            sum += digit * digit ;
            num = (num  - digit) / 10 ;
        }
        num = sum ;
    }
    return (num == 1) ;
}
 
let cnt = 5;
let num = 1;
let space = ''; 
while(cnt-- > 0) 
{
    while(!happy_number(num))
        num++ ;
        space = space+(num + ", ") ;

    num++ ;
}
console.log('First 5 happy numbers are : '+ space);