const os = require("node:os");

function osCpusAmount() {
  return os.cpus().length;
}
function memInfo() {
  const freeMem = os.freemem();
  const totalMem = os.totalmem();
  const inuseMem = Number(((totalMem - freeMem) / totalMem).toFixed(2));

  return {
    freeMem,
    totalMem,
    inuseMem,
  };
}

module.exports = { osCpusAmount, memInfo };
