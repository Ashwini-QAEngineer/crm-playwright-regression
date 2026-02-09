import { test, expect } from '../../fixtures/auth';

test.describe('CRM Recruitment Module Regression', () => {
  test('REG-010 - Navigate to Recruitment module', async ({ loggedInPage:page }) => {
    await page.getByRole('link',{ name:'Recruitment' }).click();
    await expect(page).toHaveURL(/recruitment/);
  });

  test('REG-011 - Vacancies list visible', async ({ loggedInPage:page }) => {
    await page.getByRole('link',{ name:'Recruitment' }).click();
    await page.getByText('Vacancies').click();
    await expect(page.locator('.oxd-table-body')).toBeVisible();
  });
});
