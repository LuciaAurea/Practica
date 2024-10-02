const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/cucumber-report.json',
    output: 'reports/cucumber-html-report.html',
    reportSuiteAsScenarios: true,
    launchReport: true,
    metadata: {
        "App Version":"0.3.2",
        "Test Environment": "STAGING",
        "Browser": "Chrome  89.0",
        "Platform": "Windows 10",
        "Parallel": "Scenarios",
        "Executed": "Remote",
        "Author": "Lucia Aurea Lorenzo Cervera"
    },
    reportTitle: 'Desafío de Automatización con Playwright'
};

reporter.generate(options);