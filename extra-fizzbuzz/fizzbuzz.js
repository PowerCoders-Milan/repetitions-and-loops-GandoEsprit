for(var iterator = 1; iterator <= 100; iterator++){
    if((iterator%3 == 0) && !(iterator%5 == 0)){
        console.log('Fizz');
    }
    if((iterator%5 == 0) && !(iterator%3 == 0)){
        console.log('Buzz');
    }
    if((iterator%3 == 0) && (iterator%5 == 0)){
        console.log('FizzBuzz');
    }
    else{
        console.log(iterator);
    }
}