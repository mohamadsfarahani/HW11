const util = require("util");
const fs = require("fs");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function main() {
  const fileContent = await readFile("./from.txt", "utf-8");
  const fileContent2 = await readFile("./append.txt", "utf-8");
  result = fileContent2 + " " + fileContent;
  const writeResult = await writeFile("./to.txt", result);
  return "succses";
}
main();
