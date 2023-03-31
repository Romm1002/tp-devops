import { test, expect } from '@playwright/test';

test('Verify wrong data', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.getByPlaceholder('Nom', { exact: true }).fill('759');
  await page.getByPlaceholder('Prénom').fill('78-96');
  await page.getByPlaceholder('Adresse e-mail').fill('15.45');
  await page.getByPlaceholder('Commentaire...').click();
  await page.locator('html').click();
  await page.getByRole('button', { name: 'Enregistrer' }).click();

  const errorLastname = page.locator('#errorLastname');
  const errorFirstname = page.locator('#errorFirstname');
  const errorEmail = page.locator('#errorEmail');
  const errorComment = page.locator('#errorComment');

  await expect(errorLastname).toHaveText('Nom non valide');
  await expect(errorLastname).toHaveCSS('color', 'rgb(255, 0, 0)');

  await expect(errorFirstname).toHaveText('Prénom non valide');
  await expect(errorFirstname).toHaveCSS('color', 'rgb(255, 0, 0)');

  await expect(errorEmail).toHaveText('Email non valide');
  await expect(errorEmail).toHaveCSS('color', 'rgb(255, 0, 0)');

  await expect(errorComment).toHaveText('Commentaire non valide');
  await expect(errorComment).toHaveCSS('color', 'rgb(255, 0, 0)');

  await expect(page.locator('#form')).toBeVisible();
  await expect(page.locator('#results')).toBeHidden();

  await page.getByPlaceholder('Nom', { exact: true }).fill('Barbier');
  await page.getByPlaceholder('Prénom').fill('Nathan');
  await page.getByPlaceholder('Adresse e-mail').fill('n.barbier@gmail.com');
  await page.getByPlaceholder('Commentaire...').click();
  await page.getByPlaceholder('Commentaire...').fill('Commentaire');
  await page.getByRole('button', { name: 'Enregistrer' }).click();

  await expect(errorLastname).toHaveText('');
  await expect(errorFirstname).toHaveText('');
  await expect(errorEmail).toHaveText('');
  await expect(errorComment).toHaveText('');
});
