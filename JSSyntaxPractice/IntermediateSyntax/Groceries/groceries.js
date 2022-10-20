// Write a function groceries() that takes an array of object literals of grocery items. 
//The function should return a string with each item separated by a comma except the last 
//two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

const groceries = (arr) => {
    if (arr.length > 2) {
       let lastItem = arr[arr.length - 1].item;
       let itemsArr = [];
       for (let i = 0; i < arr.length - 1; i++){
           itemsArr.push(arr[i].item); 
        }
       return `${itemsArr.join(', ')} and ${lastItem}`
    } else {
          if (arr.length === 1) {
              return `${arr[0].item}`
      }   else {
              return `${arr[0].item} and ${arr[1].item}`
      }
    }
}; 

//Tests
//groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
//groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
//groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
