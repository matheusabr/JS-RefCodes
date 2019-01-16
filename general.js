/**
 * Getter and Setter
 */

// Function inside an object
console.log('Function inside an object');
console.log('Hard Way');
const person = {
  firstName: 'Matheus',
  lastName: 'Abreu',
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  }
};
console.log(person.fullName());

console.log('Smart Way');
const profile = {
  firstName: 'Matheus',
  lastName: 'Abreu',
  get fullName() {
    return `${profile.firstName} ${profile.lastName}`;
  },
  set fullName(value) {
    const partsName = value.split(' ');
    this.firstName = partsName[0];
    this.lastName = partsName[1];
  }
};
console.log(profile.fullName);
profile.fullName = 'Matt Abreu';
console.log(profile.fullName);
