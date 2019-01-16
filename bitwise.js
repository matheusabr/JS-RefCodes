/**
 * Bitwise Operator
 */

// Mainly used by permissions system (set and check)
console.log('Bitwise Operator');
// Concept of decimal to binary conversion, ex:
// 1 = 00000001
// 2 = 00000010
// ------------------
console.log(1 | 2);
// 3 = 00000011 (OR)
console.log(1 & 2);
// 0 = 00000000 (AND)

// Permissions: Read, Write and Execute
// 4 = 00000100 (Read)
// 2 = 00000010 (Write)
// 1 = 00000001 (Execute)
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let userPermission = 0;
userPermission = userPermission | readPermission;
console.log('userPermission', userPermission);

const hasWritePermission = userPermission & writePermission ? 'yes' : 'no';
console.log('hasWritePermission', hasWritePermission);
