import { test, expect } from '@playwright/test';

test('verify good data', async ({ page }) => {
  await page.goto('http://localhost:8080/');

  await page.getByPlaceholder('Nom', { exact: true }).fill('Dujardin');
  await page.getByPlaceholder('Nom', { exact: true }).press('Tab');
  await page.getByPlaceholder('Prénom').fill('Jean');
  await page.getByPlaceholder('Prénom').press('Tab');
  await page.getByPlaceholder('Adresse e-mail').fill('jeandujardin@gmail.com');
  await page.getByPlaceholder('Adresse e-mail').press('Tab');
  await page.getByPlaceholder('Commentaire...').fill('Bonjour, comment allez-vous ?');
  await page.getByPlaceholder('Commentaire...').press('Tab');

  await expect(page.locator('#lastname')).toHaveValue('Dujardin');
  await expect(page.locator('#firstname')).toHaveValue('Jean');
  await expect(page.locator('#email')).toHaveValue('jeandujardin@gmail.com');
  await expect(page.locator('#comment')).toHaveValue('Bonjour, comment allez-vous ?');

  await page.getByRole('button', { name: 'Enregistrer' }).press('Enter');
  await expect(page.locator('#form')).toBeHidden();
  await expect(page.locator('#results')).toBeVisible();

  await expect(page.locator('#result_lastname')).toContainText('Dujardin');
  await expect(page.locator('#result_firstname')).toContainText('Jean');
  await expect(page.locator('#result_email')).toContainText('jeandujardin@gmail.com');
  await expect(page.locator('#result_comment')).toContainText('Bonjour, comment allez-vous ?');
});
