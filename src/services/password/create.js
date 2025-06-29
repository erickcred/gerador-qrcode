import chalk from "chalk";

import handle from './handle.js'

async function createPassword() {
  console.log(chalk.cyan.bold('password'));
  const password = await handle();
  console.log(chalk.green.bold(password));
}

export default createPassword;