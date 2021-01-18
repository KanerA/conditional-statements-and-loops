let counter=0, num=1;
while(counter<100){
  if ((num % 3 === 0) && (num % 5 === 0)) {
    console.log("FizzBuzz");
  }
  else if ((num % 5 === 0)&&(num % 3 !== 0)) {
    console.log("Buzz");
  }
  else if (num % 3 === 0) console.log("Fizz");
  else console.log(num);
num+=1;
counter+=1;
}