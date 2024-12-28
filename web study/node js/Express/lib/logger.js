module.exports = function (req, res) {
  console.log(new Date().toLocaleTimeString(), req.url);
};
