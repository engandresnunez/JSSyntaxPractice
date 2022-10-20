// Write a function, convertToBaby(), that takes in an array as an 
// argument and, using a loop, returns a new array with each string 
// in the array prepended with 'baby '
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
function convertToBaby(arr) {
    let finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        let extract = `baby ${arr[i]}`;
        finalArray.push(extract);
    }
    return finalArray;
}
console.log(convertToBaby(animals));
