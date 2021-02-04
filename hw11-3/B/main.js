const fs = require('fs');
fs.writeFileSync("hw11-3/test.txt", "Hello World");
        checkFile();

//************Check if Fille exist */
function checkFile() {
    if (fs.existsSync("hw11-3/test.txt")){
        console.log("File exists");
    }else{
        console.log("File does not exist");
    }
}