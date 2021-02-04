const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function main() {
  const fileContent = await readFile("./from.txt", "utf-8");
  const writeResult = await writeFile("./to.txt", fileContent);
  return "file-copy.txt";
}

main()
  .then((r) => console.log("Result:", r))
  .catch((err) => console.log("An error occurred", err));
