import { test, expect } from '@playwright/test';
// test the get in touch button
test('get in touch button navigates to contact us form page', async ({page}) => {
    // navigate to homepage
    await page.goto('https://www.tiqtoq.co.uk/')
    // click on the get in touch button
    await page.getByRole('link', {name: /Get In Touch/i}).first().click();
    // assert page loads with get in touch heading
    await expect(page.getByRole('heading',{ name: 'Get In Touch'})).toBeVisible();
});

// test the get in touch form
test('fill get in touch form', async ({page}) => {
    await page.goto('https://www.tiqtoq.co.uk/')
    // go to form
    await page.getByRole('link', {name: /Get In Touch/i}).first().click();

    // fill in form

});