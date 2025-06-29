import chalk from 'chalk';

const promptSchemaMain = [
  {
    name: 'select',
    description: chalk.cyan.bold('Escolha a ferramenta (1 - QRCode, 2 - Password)'),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold('Escolha uma opção válida (1 ou 1)'),
    required: true,
  },
]

export default promptSchemaMain;