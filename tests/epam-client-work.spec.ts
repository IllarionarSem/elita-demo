import { test, expect } from '@playwright/test';

test('EPAM services page links to client work', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  await page.getByRole('button', { name: 'Services' }).first().click();
  await page.getByRole('link', { name: 'Services' }).first().click();

  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work')).toBeVisible();
});
