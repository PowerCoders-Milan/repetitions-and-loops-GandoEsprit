var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var valuesNumber = 0;
var valuesString = 0;
for(var values of arr1){
    if(Number.isInteger(values)){
        valuesNumber++;
    }
    else{
        valuesString++;
    }
}

console.log(valuesNumber + ' numbers, ' + valuesString + ' letters');