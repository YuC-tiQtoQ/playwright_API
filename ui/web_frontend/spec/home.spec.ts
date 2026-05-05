import { test, expect } from '@playwright/test';
// test the title on homepage
test('homepage has title', async ({ page }) => {
    await page.goto('https://www.tiqtoq.co.uk/')
    await expect(page).toHaveTitle("tiQtoQ Quality Engineering");
});

