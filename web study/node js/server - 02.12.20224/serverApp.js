const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const parseBody = require("./lib/parseBody");

const server = http.createServer();

server.on("request", require("./lib/logger"));
server.on("request", require("./lib/parseURL"));

server.on("request", async (req, res) => {
  // home
  if (req.method === "GET" && req.path === "/home") {
    res.setHeader("content-type", "text/html");

    const rs = fs.createReadStream(
      path.resolve(__dirname, "./public/HOME.html")
    );
    rs.pipe(res);
    return;
  }

  // about
  if (req.method === "GET" && req.path === "/about") {
    res.setHeader("cotent-type", "text/html");

    const rs = fs.createReadStream(
      path.resolve(__dirname, "./public/about.html")
    );
    rs.pipe(res);
    return;
  }

  // 404 not found
  res.writeHead(404, {
    "content-type": "text/plain",
  });
  res.write("page not found here");
  res.end();
});

const PORT = 3000;
server.listen(PORT, console.log(`listening on port ${PORT}`));
