console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named basket and set it to an empty array.
let basket = [];

//Create a function called addItem. It should:
function addItem( string ){ //take an input parameter for a string item
  basket.push(string); //add the new item to the global array basket.
  return true; //return true indicating the item was added
}
//Create a function called listItems. It should:
function listItems(){
   // loop over the items in the basket array
   // console.log each individual item on a new line
}

// Create a function called empty. It should:
function empty(){
  // reset the basket to an empty array
} 
