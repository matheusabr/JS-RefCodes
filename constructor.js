/**
 * Constructor Functions
 */

// Notations

// -- Factory Functions and vars:
// Camel Notation - oneTwoThreeFour

// -- Constructor Functions
// Pascal Notation - OneTwoThreeFour

// Factory function
function createObject(number, text) {
  return {
    number: number,
    text, // it is the same of text: text
    innerFunc() {
      console.log(`I'm a function inside an object`);
    }
  }
}

// Constructor function
console.log('Constructor function');
function Object(number, text) {
  this.number = number;
  this.text = text;
  this.innerFunc = function() {
    console.log(`I'm a function inside an object`);
  }
}
const objCtr1 = new Object(1, 'Uno');
console.log('objCtr1', objCtr1);

const objCtr2 = new Object(2, 'Dos');
console.log('objCtr2', objCtr2);