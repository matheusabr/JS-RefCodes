/**
 * Filters
 */

const points = [ 2, 3, 6, -1, 7, -9 ];

// Filter Array
console.log('Filter Array');
console.log('points', points);
const positivePoints = points.filter(p => p >= 0);
console.log('positivePoints', positivePoints);

// Filter Objects from array
console.log('Filter Array of Objects');
const poiList = [
  {
    name: 'hut',
    isOpen: true
  },
  {
    name: 'loto',
    isOpen: false
  },
  {
    name: 'mega',
    isOpen: true
  },
];
console.table(poiList);
const openPoi = poiList.filter(p => p.isOpen === true);
console.log('openPoi', openPoi);