var fs = require('fs');
function getnewLines() {
    fs.readFile(process.argv[2], function afterReading(err, fileContents) {
        if (err) {
            console.log("Error!");
            console.log(err);
            return;
        }
        console.log(fileContents.toString().split('\n').length - 1);
    })
}
getnewLines();
