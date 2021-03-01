for(var iterator = 0; iterator <= 20; iterator++){
  if(iterator%2 == 0){
    console.log(iterator + ' is even');
  }
}

var iterator = 0;

console.log('Loop while');

while(iterator <= 20){
  if(iterator%2 == 0){
    console.log(iterator + ' is even');
  }
  iterator++;
}

console.log('Loop do..while');

do{
  if(iterator%2 == 0){
    console.log(iterator + ' is even');
  }
  iterator++;
}while(iterator <= 20)