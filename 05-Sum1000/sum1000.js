var sum = 0;
for(var iterator = 1; iterator <=1000; iterator++){
    if((iterator%3 == 0) || (iterator%5 == 0)){
        sum += iterator;
    }
}

console.log(sum);