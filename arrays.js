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
console.log(arr, {arrLessThanTen}) // false

const arrObjIdSinceZero = arrObj.every(elm => elm.id >= 0)
console.log(arrObj, {arrObjIdSinceZero}) // true

// Check if all elements are equal
console.log('Check if all elements are equal');

const arrElmEqual = arrEqual.every(elm => elm === arrEqual[0])
console.log(arrEqual, {arrElmEqual}) // true

const arrObjIdElmEqual = arrObj.every(elm => elm.id === arrObj[0].id)
console.log(arrObj, {arrObjIdElmEqual}) // false

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
const { mibr: { country: ct, majors: mj }} = csTeams;
console.log('ct', ct);
console.log('mj', mj);

// Assign variables from arrays
console.log('Assign variables from arrays');
const randomNumbers = [ 12, 4, 35, 27, 16 ];
console.log(randomNumbers);
const [ firstNumber, secondNumber ] = randomNumbers;
console.log('firstNumber', firstNumber);
console.log('secondNumber', secondNumber);
const [ , , thirdNumber, , fifthNumber ] = randomNumbers;
console.log('thirdNumber', thirdNumber);
console.log('fifthNumber', fifthNumber);

// Rest operator to reassign array elements
console.log('Rest operator to reassign array elements');
const [ fSt, sNd, ...rest ] = randomNumbers;
console.log('fSt', fSt);
console.log('sNd', sNd);
console.log('rest', rest);

// Pass an object as a function's parameter
console.log('Pass an object as a functions parameter');
const teamProfile = ({ name, country, majors}) => {
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