import chalk from 'chalk';

const promptSchemaQRCode = [
  {
    name: 'link',
    description: chalk.cyan.bold('Digite o link para gerar o QR CODE!')
  },
  {
    name: 'type',
    description: chalk.cyan.bold('Escolha o tipo de QR CODE (1 - IMAGEM, 2 - TERMINAL)'),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold('Escolha uma opção válida (1 ou 2)'),
    required: true
  }
];

export default promptSchemaQRCode;