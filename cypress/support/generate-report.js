const report = require('multiple-cucumber-html-reporter');
const path = require('path');
const fs = require('fs');
const open = require('open');

// Caminhos dos diretórios
const jsonDir = 'cypress/cucumber-json';    // Onde estão os arquivos .json
const reportPath = 'cypress/reports';       // Onde será gerado o HTML

console.log('\n📁 Lendo arquivos JSON de:', path.resolve(jsonDir));

// Verifica se o diretório existe
if (!fs.existsSync(jsonDir)) {
  console.error('❌ Diretório JSON não encontrado!');
  process.exit(1);
}

// Verifica se há arquivos .json
const jsonFiles = fs.readdirSync(jsonDir).filter(file => file.endsWith('.json'));
if (jsonFiles.length === 0) {
  console.error('❌ Nenhum arquivo .json encontrado em:', jsonDir);
  process.exit(1);
}

console.log(`✅ ${jsonFiles.length} arquivos encontrados. Gerando relatório...\n`);

report.generate({
  jsonDir: jsonDir,
  reportPath: reportPath,
  reportName: 'Relatório de Testes Cypress',
  pageTitle: 'Oficina Cypress - Resultados',
  displayDuration: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '123' // pode deixar genérico
    },
    device: 'Localhost',
    platform: {
      name: 'windows',
      version: '10'
    }
  },
  customData: {
    title: 'Informações do Projeto',
    data: [
      { label: 'Projeto', value: 'Oficina Cypress' },
      { label: 'Ambiente', value: 'Desenvolvimento' },
      { label: 'Responsável', value: 'Seu Nome' },
      { label: 'Data', value: new Date().toLocaleString('pt-BR') }
    ]
  }
});
const reportFile = path.resolve(reportPath, 'index.html');

console.log('\n✅ Relatório HTML gerado com sucesso!');
console.log('📂 Caminho do relatório:', reportFile);

// Abrir automaticamente no navegador
open(reportFile);

