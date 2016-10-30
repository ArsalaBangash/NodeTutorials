var fs = require('fs');
var fileContents = fs.readFileSync(process.argv[2]);
var stringFileContents = fileContents.toString().split('\n');
console.log(stringFileContents.length - 1);
