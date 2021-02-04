const fs = require("fs");
let fromText = `${fs.readFileSync("./from.txt", "utf8")} ==>from.txt\n`;
fromText += `${fs.readFileSync("./append.txt", "utf8")} ==>append.txt`;
fs.writeFileSync("./to.txt", `${fromText}\n*Copied by Sync Method*`);
