const {randomBytes} = require('crypto');
const id = randomBytes(4).toString('hex');
console.log(id);