// A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special.
let menu = {
   _meal: '',
   _price: 0,
   set meal(mealToCheck) {
     if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
     } else {
        return 'Invalid meal type. UNABLE TO PROCESS'
     }
   },

   set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
    } else {
        return 'Invalid price entered. UNABLE TO PROCESS'
    }
   }, 

   get todaysSpecial() {
     if (this._meal && this._price) {
        return `Today’s Special is ${this._meal} for $${this._price}!`;
     } else {
        return 'Meal or price was not set correctly!';
     }
   }
}
menu.meal = 'American Breakfast';
menu.price = 3;
//console.log(menu._meal);
//console.log(menu._price);
console.log(menu.todaysSpecial);

