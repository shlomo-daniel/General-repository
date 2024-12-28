const sysInfo = require("./sysInfo");
const chalk = require("chalk");

const { freeMem, totalMem, inuseMem } = sysInfo.memInfo();
const cpus = sysInfo.osCpusAmount();

function showSysInfo() {
  console.log(chalk.green(freeMem));
  console.log(chalk.blue(totalMem));
  console.log(chalk.red(inuseMem));
  console.log(chalk.bgBlueBright(cpus));
}
showSysInfo();
