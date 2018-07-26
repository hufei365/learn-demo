var fs = require('fs');
console.log('another-thread.js ------ process connect: ' , process.connect);
process.send( fs.readFileSync('test.json', 'utf-8'));