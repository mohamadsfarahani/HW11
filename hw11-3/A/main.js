const fs = require('fs');
    fs.writeFile("hw11-3/test.txt" ,"Hellow World", (err) => {
        if (err) return console.log(err.message);
        checkFile();
})

//************Check if Fille exist */
function checkFile() {
    fs.access("hw11-3/test.txt", (err) => {
        if (err) {
            console.log("File does not exist");
          return;
        }
        console.log("File exists");
    });
}
