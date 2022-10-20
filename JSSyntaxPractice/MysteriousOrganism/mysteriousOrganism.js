// You’re part of a research team that has found a new mysterious organism 
// at the bottom of the ocean near hydrothermal vents. Your team names the organism, 
// Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. 
// The small DNA samples and frequency at which it mutates due to the hydrothermal vents 
// make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level 
// and locating P. aequor in the deep sea is difficult and expensive. 
// Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  // Check values 
  //console.log(returnRandBase());

  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
//check values 
 //console.log(mockUpStrand());


   const pAequorFactory = (specimenNum, dnaArr) => {
     return {
         _specimenNum: specimenNum, 
        _dna: dnaArr, 
        // is responsible for randomly selecting a base in the object’s dna property and changing the current base to a different base. Then .mutate() will return the object’s dna.
         mutate() {
              let randomIndex = Math.floor(Math.random() * 15);            
              let randomBase = this._dna[randomIndex];
              let newRandomBase = '';
              do {
                  newRandomBase = returnRandBase();                
              } while (randomBase === newRandomBase);
              this._dna[randomIndex] = newRandomBase;
              return this._dna;
            },
            //The behavior of .compareDNA() is to compare the current pAequor‘s .dna with the passed in pAequor‘s .dna and compute how many bases are identical and in the same locations. .compareDNA() does not return anything, but prints a message that states the percentage of DNA the two objects have in common
        compareDNA(specimen) {
            let accumulator = 0;
            for (let i = 0; i < this._dna.length; i++) {
                for (let j = 0; j < specimen._dna.length; j++) {
                    if (i === j && this._dna[i] === specimen._dna[j]) {
                        accumulator++;
                    }                    
                }                
            }
            let percentage = (accumulator/this._dna.length) * 100;
            return `The specimens ${this._specimenNum} and ${specimen._specimenNum} have ${accumulator} element(s) in common, that represents the ${percentage}% of their DNA that means ${accumulator}/15 bases`
        }, 
        // P. aequor have a likelier chance of survival if their DNA is made up of at least 60% 'C' or 'G' bases.
        //  returns true if the object’s .dna array contains at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
        willLikelySurvive() {
            let countOfBasesC = 0;
            let countOfBasesG = 0;
            for (let i = 0; i < this._dna.length; i++) {
                if (this._dna[i] === 'C') {
                    countOfBasesC ++;
                } else if(this._dna[i] === 'G') {
                    countOfBasesG++;
                }
            }
            if (countOfBasesC >= 9 || countOfBasesG >= 9) {   
                return true;            
            } else {
                return false;
            }
        }
     }
   }


// tests 
//const testSpecimen2 = pAequorFactory(2, mockUpStrand());
 //const testSpecimen3 = pAequorFactory(3, mockUpStrand());
// const testSpecimen4 = pAequorFactory(4, mockUpStrand());
 //const testSpecimen5 = pAequorFactory(5, mockUpStrand());

//Test the mutate
// console.log(testSpecimen2._dna);
// console.log(testSpecimen2.mutate());

// Test the compare DNA
//console.log(testSpecimen2.compareDNA(testSpecimen3));

// Test will likely survuve
// console.log(testSpecimen5._dna);
// console.log(testSpecimen5.willLikelySurvive());