let pattern="";
for(x=0; x<6; x++){
    for(y=0; y < x; y++){
        pattern+= "*";       
    }
    pattern+= " \n";
}

console.log(pattern);