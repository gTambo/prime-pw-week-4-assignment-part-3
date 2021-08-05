console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket and set it to an empty array.
let basket = [];
console.log(`Basket is ${basket}`);

//Create a function called addItem. It should:
function addItem( string ){ //take an input parameter for a string item
  console.log('in addItem');
  basket.push(string); //add the new item to the global array basket.
  return true; //return true indicating the item was added
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
