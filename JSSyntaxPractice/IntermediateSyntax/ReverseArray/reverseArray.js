//Write a function, reverseArray(), that takes in an array as an argument 
// and returns a new array with the elements in the reverse order.
const sentence = ['sense.','make', 'all', 'will', 'This'];

const reverseArray = (randomArray) => {
  let finalArray = []; 
  for (let i = randomArray.length - 1; i >= 0; i--) {
    let extracted = randomArray.pop();
    finalArray.push(extracted);
  }
  return finalArray;
}

console.log(reverseArray(sentence));