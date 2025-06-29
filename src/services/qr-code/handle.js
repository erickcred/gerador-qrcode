import chalk from 'chalk';
import qrCodeTerminal from 'qrcode-terminal';

async function handle(err, result) {
  if (err) {
    console.log(chalk.red.bold('Erro ao gerar QRCode', err));
    return;
  }

  const isSmall = result.type === '2';

  qrCodeTerminal.generate(result.link, { small: isSmall }, (qrCode) => {
    console.log(chalk.green.bold('QR Code gerado com sucesso!\n'));
    console.log(qrCode);
  });
}

export default handle;