arr = [3, 4, 6, 12, 32]
obj = { id: 0, name: 'mibr' }
arrObj = [obj, { id: 1, name: 'Luminosity' }]

arrEqual = [17, 17, 17, 17]

/**
 * Every
 */

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
