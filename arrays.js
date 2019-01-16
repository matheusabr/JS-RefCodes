/**
 * Every
 */

arr = [3, 4, 6, 12, 32]
obj = { id: 0, name: 'mibr' }
arrObj = [obj, { id: 1, name: 'Luminosity' }]

arrEqual = [17, 17, 17, 17]

// Satisfy clause to all elements
console.log('Satisfy clause to all elements');

const arrLessThanTen = arr.every(elm => elm < 10)
console.log(arr, { arrLessThanTen }) // false

const arrObjIdSinceZero = arrObj.every(elm => elm.id >= 0)
console.log(arrObj, { arrObjIdSinceZero }) // true

// Check if all elements are equal
console.log('Check if all elements are equal');

const arrElmEqual = arrEqual.every(elm => elm === arrEqual[0])
console.log(arrEqual, { arrElmEqual }) // true

const arrObjIdElmEqual = arrObj.every(elm => elm.id === arrObj[0].id)
console.log(arrObj, { arrObjIdElmEqual }) // false

// Check if any element satisfy a clause

/**
 * Destructuring
 */

// Assign variables from objects
console.log('Assign variables from objects');
const prices = { amz: 23.7, eby: 26.85, gbt: 21.5 };
console.table(prices);

// -- Hard way
console.log('Destructuring the Hard Way');
let amzCp = prices.amz;
let ebyCp = prices.eby;
let gbtCp = prices.gbt;
console.log('amzCp', amzCp);
console.log('ebyCp', ebyCp);
console.log('gbtCp', gbtCp);

// -- Smart way
console.log('Destructuring the Smart Way');
const { amz, eby, gbt } = prices;
console.log('amz', amz);
console.log('eby', eby);
console.log('gbt', gbt);

// -- Smart way: change var names
console.log('Destructuring and change var names');
const { amz: x, eby: y, gbt: z } = prices;
console.log('x', x);
console.log('y', y);
console.log('z', z);

// Assign variables from nested objects
console.log('Assign variables from nested objects');
const csTeams = {
  mibr: { country: 'bra', majors: 3 },
  astralis: { country: 'den', majors: 2 }
};
console.table(csTeams);
const { mibr: { country: ct, majors: mj } } = csTeams;
console.log('ct', ct);
console.log('mj', mj);

// Assign variables from arrays
console.log('Assign variables from arrays');
const randomNumbers = [12, 4, 35, 27, 16];
console.log(randomNumbers);
const [firstNumber, secondNumber] = randomNumbers;
console.log('firstNumber', firstNumber);
console.log('secondNumber', secondNumber);
const [, , thirdNumber, , fifthNumber] = randomNumbers;
console.log('thirdNumber', thirdNumber);
console.log('fifthNumber', fifthNumber);

// Rest operator to reassign array elements
console.log('Rest operator to reassign array elements');
const [fSt, sNd, ...rest] = randomNumbers;
console.log('fSt', fSt);
console.log('sNd', sNd);
console.log('rest', rest);

// Pass an object as a function's parameter
console.log('Pass an object as a functions parameter');
const teamProfile = ({ name, country, majors }) => {
  console.log('name', name);
  console.log('country', country);
  console.log('majors', majors);
}
const mainTeam = {
  name: 'MiBR',
  country: 'Brazil',
  majors: 3,
  minors: 15
};
console.table(mainTeam);
teamProfile(mainTeam);

/**
 * Filter and Map
 */

const numbers = [-2, 0, -1, 3, 7, 12];
console.log('numbers', numbers);

// Filter an array
console.log('Filter an array');
const filtered = numbers.filter(x => x > 0);
console.log('filtered', filtered);

// Map and concatenate elements
console.log('Map and concatenate elements');
const listElements = filtered.map(n => `<li>${n}</li>`);
console.log('listElements', listElements);

// Join elements and set its parent
console.log('Join elements and set its parent');
const listUl = '<ul>' + listElements.join('') + '</ul>';
console.log('listUl', listUl);

// Map and return an array of objects
console.log('Map and return an array of objects');
const items = filtered.map((n) => ({ value: n }))
console.table(items);

// Chaining js methods to filter and map an array
console.log('Chaining js methods to filter and map an array');
const chainedListEl = numbers
  .filter(x => x > 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 3)
  .map(obj => obj.value);
console.log('chainedListEl', chainedListEl);

/**
 * Reducer
 */

// Sum the elements of an array
// -- Hard way
console.log('Sum the elements of an array the Hard way');
let sum = 0;
for (let n of numbers)
  sum += n;
console.log(sum);

// -- Smart way
console.log('Reduce sums elements of an array in a Smart way');
// Set 0 on second argument to start the accumulator on 0
// or leave empty to start the accumulator on first position value of array
const sumNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sumNumbers);
