var fs = require('fs');

process.send( fs.readFileSync('test.json', 'utf-8'));