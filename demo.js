/*
*  Tutorial about commonly used loops
*  for loop, while loop, .forEach(), .map(),
* */

let array = [
  { id: 1, value: 'hello'},
  { id: 2, value: 'world'},
  { id: 3, value: '!!!'}
]

// for loop
for (let i = 0; i < array.length; i++) {
  console.log('for', array[i])
}
// while loop
let val = 0;
while (val < array.length) {
  console.log('while', array[val])
  val++
}

// forEach()
array.forEach(val => console.log('forEach', val));

// map() - mutate the array
array.map(val => console.log('map', val));
