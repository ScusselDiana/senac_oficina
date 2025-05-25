const reporter = require('cucumber-html-reporter');
const path = require('path');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cypress/cucumber-json/adicionar.cucumber.json',
  output: 'cypress/reports/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Name": "Oficina Cypress",
    "Test Environment": "Desenvolvimento",
    "Browser": "Chrome",
    "Platform": process.platform,
    "Executed": "Local"
  }
};

console.log('Iniciando geração do relatório...');
try {
  reporter.generate(options);
  console.log('✅ Relatório HTML gerado em:');
  console.log(`📄 ${path.resolve(options.output)}`);
} catch (e) {
  console.error('Erro ao gerar o relatório:', e);
}
console.log('Finalizou geração do relatório!');
