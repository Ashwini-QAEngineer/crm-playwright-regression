import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir:'./tests', timeout:45000, retries:2,
  workers: process.env.CI ? 2 : 4,
  use:{
    baseURL:'https://opensource.demo.orangehrmlive.com',
    screenshot:'only-on-failure', trace:'on-first-retry',
  },
  projects:[{ name:'chromium', use:{...devices['Desktop Chrome']} }],
});
