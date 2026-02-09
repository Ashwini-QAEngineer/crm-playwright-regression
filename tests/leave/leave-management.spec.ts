import { test, expect } from '../../fixtures/auth';

test.describe('CRM Leave Management Regression', () => {
  test('REG-001 - Navigate to Leave module', async ({ loggedInPage:page }) => {
    await page.getByRole('link',{ name:'Leave' }).click();
    await expect(page).toHaveURL(/leave/);
  });

  test('REG-002 - Leave entitlement list loads', async ({ loggedInPage:page }) => {
    await page.getByRole('link',{ name:'Leave' }).click();
    await page.getByText('Entitlements').click();
    await expect(page.locator('.oxd-table')).toBeVisible();
  });
});
