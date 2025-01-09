import { test, expect } from '@playwright/test';
import exp from 'constants';

test('has title', async ({ page }) => {

  await page.goto('http://127.0.0.1:5000/');
  await page.locator("//input[@id='username']").fill('QALevel1');
  await page.locator("#password").fill('test22');
  await page.locator("//input[@value='Login']").click();
  await expect(page).toHaveScreenshot('ScreenshotsVisual/QuoteCreation.png')
});
