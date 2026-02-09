import { test as base } from '@playwright/test';

type AuthFixture = { loggedInPage: import('@playwright/test').Page };

export const test = base.extend<AuthFixture>({
  loggedInPage: async ({ page }, use) => {
    await page.goto('/web/index.php/auth/login');
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123');
    await page.locator('[type="submit"]').click();
    await page.waitForURL(/dashboard/);
    await use(page);
  },
});
export { expect } from '@playwright/test';
