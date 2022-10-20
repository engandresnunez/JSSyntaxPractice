const dogFactory = (name, breed, weight) => {
    return {
      _name: name, 
      _breed: breed, 
      _weight: weight, 
      get name() {
        return this._name;
      }, 
      set name(newName) {
        this._name= newName;
      }, 
  
      get breed() {
        return this._breed;
      }, 
      set breed(newBreed) {
        this._breed = newBreed; 
      }, 
  
      get weight() {
        return this._weight; 
      }, 
      set weight(newWeight) {
        if (typeof newWeight === 'number') {
           this._weight = newWeight;
        }else {
          console.log('weight has to be a number');
        }
      }, 
      bark() { return 'ruff! ruff!'}, 
      eatTooManyTreats(){this._weight ++}
    }
  }; 
  const buddy = dogFactory('Buddy', 'Golden', 78);
  console.log(buddy.weight);
