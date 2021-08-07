console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket and set it to an empty array.
let basket = [];
console.log(`Basket is ${basket}`);

//Create a function called addItem. It should:
function addItem( string ){ //take an input parameter for a string item
  // EDIT Adding conditions for stretch goal
  console.log('in addItem');
  if (isFull(basket) === false) {
    basket.push(string); //add the new item to the global array basket.
    return true; //return true indicating the item was added
  }
  return false;
}

console.log('adding iPad - should say true', addItem('iPad'));
console.log(`Basket is now: ${basket}`);
console.log('adding cable - should say true', addItem('cable'));
console.log(`Basket is now: ${basket}`);
console.log('adding iHome - should say true', addItem('iHome'));
console.log(`Basket is now: ${basket}`);
console.log('adding airPods - should say true', addItem('airPods'));
console.log(`Basket is now: ${basket}`);

//Create a function called listItems. It should:
function listItems( array ){
  console.log('in listItems');
  for (let i in array) { // loop over the items in the basket array
    console.log(array[i]);
  }  // console.log each individual item on a new line
  return 'currently in cart';
}

// Create a function called empty. It should:
function empty( array ){
  console.log('in empty');
  for (let i = array.length-1; i >= 0; i--){
    console.log(`removed: ${array.shift()}`);

  }
  return array; // reset the basket to an empty array
}
console.log(`Basket is now: ${basket}`);

/* Stretch Goals
Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.
Using functions in other functions!*/

//Add a global const named maxItems and set it to 5.
const maxItems = 5;
//Create a function called isFull(). It should:
function isFull( array ) {
  console.log('in isFull');
  if(array.length < maxItems){
    console.log(`${array} has room`);
    return false;
  } //return false if the basket contains less than max number of items
  console.log(`${array} is full`);
  return true; //return true otherwise (equal or more than maxItems)
} //end isFull
console.log('testing isfull, should say false', isFull(basket));
console.log('adding MBP - should say true', addItem('MBP'));
console.log(`Basket is now: ${basket}`);
console.log('testing isfull, should say true', isFull(basket));

//Update the required addItem function to:
  //Use the isFull function to prevent more than maxItems from being added to the basket.
  //If an item was added to the array, return true
  //If there was no room and the item could not be added return false

// Using Array built-in functions!

//Create a function called removeItem. It should:
  //Take an input parameter for a string item
  //Use Array.indexOf to find the index of the first matching item in the basket.
  //Use Array.splice to remove the first matching item from the basket.
  //Return the item removed or null if the item was not found */
