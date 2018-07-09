const os = require('os');

var totalmemory = os.totalmem();
var freememory = os.freemem();

console.log('Total memory '+ totalmemory);
console.log('Free memory '+ freememory);

//Template string
//ES6 / ES2015 : ECMAScript 6

console.log(`Total memory using template string: ${totalmemory}`);
console.log(`Free memory using template string: ${freememory}`);