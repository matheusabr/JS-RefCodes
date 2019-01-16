/**
 * Factory or Constructor Functions
 */

// An easy way to instantiate objects
// -- Hard Way
console.log('Instantiate objects the Hard Way');
const obj1 = {
  number: 1,
  text: 'Abc',
  innerObj: {
    propX: 1.23,
    propY: 2.74
  },
  isTest: false,
  innerFunc: function () {
    console.log("I'm a function inside an object 1");
  }
};
const obj2 = {
  number: 1,
  text: 'Abc',
  innerObj: {
    propX: 1.23,
    propY: 2.74
  },
  isTest: false,
  innerFunc: function () {
    console.log("I'm a function inside an object 2");
  }
};
console.log(obj1, obj2);

// -- Smart Way
// Factory function
console.log('Factory function');
function createObject(number, text) {
  return {
    number: number,
    text, // it is the same of text: text
    innerFunc() {
      console.log(`I'm a function inside an object`);
    }
  }
}
const objFact1 = createObject(1, 'First');
console.log('objFact1', objFact1);

const objFact2 = createObject(2, 'Second');
console.log('objFact2', objFact2);
