// Write a function isTheDinnerVegan() that takes in an array of food objects 
// and returns a boolean value based on whether or not every item in the array 
// has entirely plant-based origins.

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

const isTheDinnerVegan = arr => arr.every(food => food.source === 'plant');

console.log(isTheDinnerVegan(dinner));