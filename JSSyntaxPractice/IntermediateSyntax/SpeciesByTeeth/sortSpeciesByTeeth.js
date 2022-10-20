// Write a function sortSpeciesByTeeth() that takes in an array of species objects
//and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) .
// You’ll need to access each object’s .numTeeth property.
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];
 
function compareTeeth (specieObj1, specieObj2) {
    return specieObj1.numTeeth - specieObj2.numTeeth;
   }

const sortSpeciesByTeeth = (arr) => {
   arr.sort(compareTeeth)
   return arr;
}
console.log(sortSpeciesByTeeth(speciesArray));