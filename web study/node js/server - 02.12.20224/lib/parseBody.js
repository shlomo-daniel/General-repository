module.exports = function parseBody(stream) {
  return new Promise((resolve, reject) => {
    let chunks = "";

    stream.on("data", (chunk) => (chunks += chunk));
    stream.on("end", () => resolve(chunks));
  });
};
