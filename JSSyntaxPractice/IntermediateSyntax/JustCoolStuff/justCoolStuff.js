// Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in 
// .filter() method, returns an array with the items that are present in both arrays.
const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

const justCoolStuff = (arr1, arr2) =>  arr1.filter(Element => arr2.includes(Element));
console.log(justCoolStuff(myStuff, coolStuff));

