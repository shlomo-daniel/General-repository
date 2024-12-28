const favorites = [];

server.on("request", async (req, res) => {
  if (req.method === "GET" && req.path === "/home") {
    res.setHeader("content-type", "text/html");

    const rs = fs.createReadStream(
      path.resolve(__dirname, "./public/HOME.html")
    );
    rs.pipe(res);
    return;
  }

  if (req.path === "/api/favorites") {
    if (req.method === "GET") {
      res.setHeader("content-type", "application/json");
      res.end(JSON.stringify(favorites));
      return;
    }

    if (req.method === "POST") {
      const body = JSON.parse(await parseBody(req));

      favorites.push(body.favorite);
      res.writeHead(201, {
        "content-type": "application/json",
      });

      res.end(JSON.stringify(favorites));
      return;
    }
  }

  if (req.method === "GET" && req.path === "/api/favorites") {
    res.setHeader("content-type", "text/plain");

    res.end(JSON.stringify(favorites));
    return;
  }

  if (req.method === "GET" && req.path === "/users") {
    res.write("users");
    res.end();
    return;
  }

  res.writeHead(404, {
    "content-type": "text/plain",
  });
  res.write("page not found");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
