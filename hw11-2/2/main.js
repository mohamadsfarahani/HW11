const fs = require("fs");
const fromText = fs.readFileSync("./from.txt", "utf8");
fs.writeFileSync("./to.txt", `${fromText} *Copied by Sync Method*`);
console.log("Done");
