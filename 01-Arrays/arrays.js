// use this array
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// Access and output Oranges.

console.log(array[2]);

// Sort the array in alphabetical order.

array.sort();
console.log(array);

// Put "Kiwi" at the end of the array.

array.push('Kiwi');
console.log(array);

// Remove "Apples" from the array.

var pos = array.indexOf('Apples');
array.splice(pos, 1);
console.log(array);

// Sort the array in reverse order, i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

array.reverse();
console.log(array);

