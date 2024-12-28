const fs = require("node:fs");

const path = __dirname;

console.log(fs.readFileSync(__dirname + "\\hello.txt", { encoding: "utf-8" }));

async function readFile() {
  const fileContent = await fs.promises.readFile(__dirname + "\\hello.txt", {
    encoding: "utf8",
  });
  return fileContent;
}
readFile().then(console.log);

const fileConCallback = fs.readFile(
  __dirname + "\\hello.txt",
  {
    encoding: "utf8",
  },
  handleFile
);

function handleFile(err, data) {
  if (err) {
    throw "error!!!";
  }

  return console.log(data);
}
