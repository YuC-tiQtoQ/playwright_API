import { test, expect } from '@playwright/test';
// test the title on homepage
test('homepage has title', async ({ page }) => {
    await page.goto('https://www.tiqtoq.co.uk/')
    await expect(page).toHaveTitle("tiQtoQ Quality Engineering");
});


// test the get in touch button
test('get in touch button navigates to contact us form page', async ({page}) => {
await page.goto('https://www.tiqtoq.co.uk/')
// click on the get in touch button
await page.getByRole('link', {name: 'Get In Touch'}).first().click();

// assert page loads with get in touch heading
await expect(page.getByRole('heading',{ name: 'Get In Touch'})).toBeVisible();
});