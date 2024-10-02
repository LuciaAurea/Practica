import { defineConfig } from "playwright/test";

export default defineConfig({
  timeout: 300000, 
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }] 
  ],
  use: {
    headless: true,
    screenshot: 'only-on-failure', 
    video: 'retain-on-failure', 
  },
});
