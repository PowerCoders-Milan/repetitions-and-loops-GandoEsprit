function returnResult(iterator){
    return iterator*9;
}
for(var iterator = 0; iterator <= 10; iterator++){
    console.log(iterator + ' * 9 = ' + returnResult(iterator));
}