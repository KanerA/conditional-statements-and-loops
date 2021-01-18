let cube=0;
let sum=0;
for(let i=1; i<10;i++){
    for(j=0; j<10; j++){
        for(p=0; p<10; p++){
            cube=(Math.pow(i, 3)+ Math.pow(j, 3)+ Math.pow(p, 3));
            sum=i*100+ j*10+ p;
            if(cube===sum){
                console.log(sum+ " is an armstrong number");
            }
        }
    }
}