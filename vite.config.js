import { defineConfig } from 'vitest/config';
export default defineConfig({
    test: {
        reporters: ['default', 'junit', 'json'],
        outputFile: {
            junit: './test-results/junit-report.xml',
            json: './test-results/json-report.json'
        },
        coverage: {
            provider: 'v8',
            reportsDirectory: './coverage'
        }
    }
});