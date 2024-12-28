const path = require("node:path");
const fs = require("node:fs");
const { log } = require("node:console");
const { encode } = require("node:querystring");

const filePath = path.resolve(__dirname, "./counterStream.txt");

// writeRange(filePath, { start: 1, end: 100, finishedMessage: "finished" });

// write
function writeRange(
  path,
  { start = 1, end = 100, intervalMS = 100, finishedMessage = "" }
) {
  const ws = fs.createWriteStream(path);
  let i = start;

  const intervalID = setInterval(() => {
    if (i > end) {
      clearInterval(intervalID);
      ws.end(finishedMessage);
      return;
    }

    ws.write(`${i++} \r\n`);
  }, intervalMS);
}

// read
readRange(filePath);
function readRange(filePath) {
  const rs = fs.createReadStream(filePath, {
    highWaterMark: 90,
    encoding: "utf8",
  });

  let fistOfChunk, lastOfChunks;
  rs.on("data", (chunk) => {
    if (typeof fistOfChunk === "undefined") {
      fistOfChunk = chunk.split("\r\n")[0];
    }

    lastOfChunks = chunk;
  });
  rs.on("end", () => {
    const lastLine = lastOfChunks.split("\r\n").at(-1);
    console.log(`${fistOfChunk} <-> ${lastLine}`);
  });
}
