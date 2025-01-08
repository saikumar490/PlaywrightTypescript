import { test, expect, chromium } from '@playwright/test';
import { loginpage } from '../Pages/Loginpage';
import  Page  from "@playwright/test";
import {urls, locators, browser} from '../Support/constants'


test.only('Single Risk', async ({ page }) => {

   const Loginpage = new loginpage(page);
   await page.goto(urls.AdminUrl);
   await Loginpage.LaunchtheUrlandLoginintoapplicatin();
   await page.waitForTimeout(5000);
   // await Loginpage.Addingclientdetails();
   // await page.waitForTimeout(5000);
   // await Loginpage.AddingRiskDetails();
   // await page.waitForTimeout(5000);
   // await Loginpage.addingdriverdetails();
   // await page.waitForTimeout(5000);
   // page.close();
   
});

test('Multiple Risk', async ({ page }) => {

   const Loginpage = new loginpage(page);
   await page.goto(urls.AdminUrl);
   await Loginpage.LaunchtheUrlandLoginintoapplicatin();
   await page.waitForTimeout(5000);
   await Loginpage.Addingclientdetails();
   await page.waitForTimeout(5000);
   await Loginpage.multiplerisk();
   await page.waitForTimeout(5000);
   await Loginpage.addingdriverdetails();
   await page.waitForTimeout(5000);
   page.close();
   
});