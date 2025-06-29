import prompt from 'prompt';
import chalk from 'chalk';

import promptSchemaMain from './prompts-schema/prompt-schema-main.js';
import createQRCode from './services/qr-code/create.js';
import createPassword from './services/password/create.js'
import chalk from 'chalk';

async function main() {
  console.clear();
  prompt.get(promptSchemaMain, async (err, result) => {
    
    if (err) {
      console.log(chalk.red.bold('Erro ao executar o prompt', err));
      return;
    }

    if (result.select == '1') await createQRCode();

    if (result.select == '2') await createPassword();
  });
  prompt.start();

}

main();