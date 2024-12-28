module.exports = function (req, res) {
  const { pathname, searchParams } = new URL("http://localhost" + req.url);
  req.path = pathname;
  req.query = Object.fromEntries(searchParams.entries());
};
