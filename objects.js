/**
 * Objects
 */

const objOriginal = {
  number: 1,
  text: 'First', // it is the same of text: text
  innerFunc() {
    console.log(`I'm a function inside an object`);
  }
}

// Copy an object
console.log('Copy an object');
console.log('objOriginal', objOriginal);

// -- Hard Way
console.log('Hard Way');
let objCp1 = {};
for (const key in objOriginal)
  objCp1[key] = objOriginal[key];
console.log('objCp1', objCp1);

// Smart Ways
// <WARNING>
// Object.assign is not supported by major browsers as Chrome and Firefox
// Error: "Uncaught TypeError: Object.assign is not a function"
// console.log('Object.assign');
// const objCp2 = Object.assign({}, objOriginal);
// console.log('objCp2', objCp2);

// Spread operator
console.log('Spread Operator');
const objCp3 = { ...objOriginal };
console.log('objCp3', objCp3);

// JSON stringify and parse
// <WARNING>
// Do not copy object functions
console.log('JSON stringify and parse');
const objCp4 = JSON.parse(JSON.stringify(objOriginal));
console.log('objCp4', objCp4);
