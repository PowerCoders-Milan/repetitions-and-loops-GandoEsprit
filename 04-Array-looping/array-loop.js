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

var count = 0;

for(var iterator = 0; iterator < arr1.length; iterator++){
    var result = arr1.filter(word => arr1[iterator]== word);

    if(count < result.length){
        count = result.length;
    }
}

console.log('\n\n' + count);