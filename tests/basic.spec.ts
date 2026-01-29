import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.tiqtoq.co.uk/')
    await expect(page).toHaveTitle("tiQtoQ Quality Engineering");
});

test('get in touch', async ({page}) => {
    await page.goto('https://www.tiqtoq.co.uk/')
    // click on the get in touch button
    await page.getByRole('link', {name: 'Get In Touch'}).click();

    // assert page loads with Get In Touch heading
    await expect(page.getByRole('heading',{ name: 'Get In Touch'})).toBeVisible();
});