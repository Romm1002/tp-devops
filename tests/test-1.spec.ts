import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByPlaceholder('Nom', { exact: true }).fill('Barbier');
  await page.getByPlaceholder('Prénom').fill('Nathan');
  await page.getByPlaceholder('Adresse e-mail').fill('n.barbier@gmail.com');
  await page.getByPlaceholder('Adresse e-mail').press('Tab');
  await page.getByPlaceholder('Commentaire...').fill('Comment vas-tu ?');
  await page.getByRole('button', { name: 'Enregistrer' }).click();

  await expect(page.locator('#form')).toBeHidden();
  await expect(page.locator('#results')).toBeVisible();

  await expect(page.locator('#result_lastname')).toContainText('Barbier');
});
