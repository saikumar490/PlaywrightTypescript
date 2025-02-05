import { FrameLocator, Locator, Page, expect } from "@playwright/test";


export class HelperBase {
  
  // Click on an element
  async ClickOnElement(page: Page, ElementLocator: string): Promise<void> {
    try {
      // Wait for the element to be visible before clicking
      const element: Locator = page.locator(ElementLocator);
      await element.waitFor({ state: 'visible' });
      await element.click();
      console.log(`Clicked on element with locator: ${ElementLocator}`);
    } catch (error) {
      console.error(`Failed to click on element with locator: ${ElementLocator}`, error);
      throw error;
    }
  }

  // Enter text into an input field
  async EnterTextIntoField(page: Page, ElementLocator: string, optionValue: string): Promise<void> {
    try {
      const element: Locator = page.locator(ElementLocator);
      await element.waitFor({ state: 'visible' });
      await element.clear();
      await element.fill(optionValue);
    } catch (error) {
      console.error(`Failed to click on element with locator: ${ElementLocator}`, error);
      throw error;
    }
  }
  // Enter text into an input field
  async TextIntoField(page: Page, ElementLocator: string, username): Promise<void> {
    try {
      const element: Locator = page.locator(ElementLocator);
      await element.waitFor({ state: 'visible' });
      await element.clear();
      await element.fill(username);
    } catch (error) {
      console.error(`Failed to click on element with locator: ${ElementLocator}`, error);
      throw error;
    }
  }

  // Click on radio button
  async ClickOnRadioButton(page: Page, ElementLocator: string): Promise<void> {
    try {
      const radioButton: Locator = page.locator(ElementLocator);
      await radioButton.waitFor({ state: 'visible' });
      
      const isSelected: boolean = await radioButton.isChecked();
      if (!isSelected) {
        await radioButton.click();
        console.log(`Radio button with locator: ${ElementLocator} has been selected.`);
      } else {
        console.log(`Radio button with locator: ${ElementLocator} is already selected.`);
      }
    } catch (error) {
      console.error(`Failed to interact with radio button with locator: ${ElementLocator}`, error);
      throw error;
    }
  }

  // Click on checkbox
  async ClickOnCheckbox(page: Page, ElementLocator: string): Promise<void> {
    try {
      const checkbox: Locator = page.locator(ElementLocator);
      await checkbox.waitFor({ state: 'visible' });

      const isChecked: boolean = await checkbox.isChecked();

      if (!isChecked) {
        await checkbox.click();
        console.log(`Checkbox with locator: ${ElementLocator} has been checked.`);
      } else {
        console.log(`Checkbox with locator: ${ElementLocator} is already checked.`);
      }
    } catch (error) {
      console.error(`Failed to interact with checkbox with locator: ${ElementLocator}`, error);
      throw error;
    }
  }

  // Select an option from static dropdown
  async SelectOptionFromDropdown(page: Page, ElementLocator: string, optionValue: string): Promise<void> {
    try {
      const dropdown: Locator = page.locator(ElementLocator);
      await dropdown.waitFor({ state: 'visible' });
      await dropdown.selectOption({ label: optionValue });
      console.log(`Option with label "${optionValue}" has been selected in the dropdown.`);
    } catch (error) {
      console.error(`Failed to select option with value "${optionValue}" in dropdown with locator: ${ElementLocator}`, error);
      throw error;
    }
  }

  // Select from dynamic dropdown (autocomplete)
  async selectFromAutocomplete(page: Page, inputLocator: string, searchText: string, optionTextLocator: string , suggestionText: string): Promise<void> {
    try {
      const inputField: Locator = page.locator(inputLocator);
      await inputField.fill(searchText);

      const suggestions: Locator[] = await page.locator(optionTextLocator).all();

      for (const suggestion of suggestions) {
        const suggestionText = await suggestion.textContent();
        if (suggestionText?.trim().includes(searchText)) {
          await suggestion.click();
          break;
        }
      }
    } catch (error) {
      console.error(`Failed to select option for search text "${searchText}"`, error);
      throw error;
    }
  }

  // Handle alert
  async handleAlert(page: Page, alertTriggerLocator: string, expectedAlertMessage: string, action: 'accept' | 'dismiss' = 'accept'): Promise<void> {
    page.on('dialog', async (dialog) => {
      console.log(`Alert Message: ${dialog.message()}`);

      if (dialog.message() !== expectedAlertMessage) {
        throw new Error(`Unexpected alert message: ${dialog.message()}`);
      }

      if (action === 'accept') {
        await dialog.accept();
      } else {
        await dialog.dismiss();
      }
    });

    const alertTrigger: Locator = page.locator(alertTriggerLocator);
    if (await alertTrigger.isVisible()) {
      await alertTrigger.click();
    } else {
      throw new Error(`Element with locator ${alertTriggerLocator} not found or not visible.`);
    }
  }

  // Mouseover an element
  async mouseOverElement(page: Page, locator: string): Promise<void> {
    const element: Locator = page.locator(locator);
    if (await element.isVisible()) {
      await element.hover();
      console.log(`Hovered over element: ${locator}`);
    } else {
      throw new Error(`Element with locator ${locator} not visible.`);
    }
  }

  // Select a date from a calendar with navigation
  async selectDateFromCalendarWithNavigation(
    page: Page,
    monthLocator: string,
    yearLocator: string,
    dateLocator: string,
    targetMonth: string,
    targetYear: string,
    targetDay: string
  ): Promise<void> {
    await page.waitForSelector(monthLocator);
    await page.waitForSelector(yearLocator);

    const yearElement: Locator = page.locator(yearLocator);
    let currentYear = await yearElement.innerText();
    while (currentYear !== targetYear) {
      await page.locator('button.next-year').click();
      currentYear = await yearElement.innerText();
    }

    const monthElement: Locator = page.locator(monthLocator);
    let currentMonth = await monthElement.innerText();
    while (currentMonth !== targetMonth) {
      await page.locator('button.next-month').click();
      currentMonth = await monthElement.innerText();
    }

    const targetDateLocator: string = dateLocator.replace('DATE_PLACEHOLDER', targetDay);
    const targetDate: Locator = page.locator(targetDateLocator);
    await targetDate.waitFor({ state: 'visible' });
    await targetDate.click();
    console.log(`Selected date from calendar: ${targetMonth} ${targetDay}, ${targetYear}`);
  }

  // Upload a file
  async uploadFile(page: Page, inputLocator: string, filePath: string): Promise<void> {
    try {
      const fileInput: Locator = page.locator(inputLocator);
      await fileInput.setInputFiles(filePath);
      console.log(`File uploaded successfully from path: ${filePath}`);
    } catch (error) {
      console.error(`Failed to upload file from path: ${filePath}`, error);
      throw error;
    }
  }

  // Take a screenshot
  async takeScreenshot(page: Page, screenshotType: string, text: string | null = null, locator: string | null = null, screenshotPath: string): Promise<void> {
    try {
      let elementLocator: Locator;

      if (screenshotType === 'fullpage') {
        await page.screenshot({ path: screenshotPath, fullPage: true });
        console.log(`Full-page screenshot saved to: ${screenshotPath}`);
      } else if (screenshotType === 'element') {
        if (text) {
          elementLocator = page.locator(`//*[contains(text(),'${text}')]`);
        } else if (locator) {
          elementLocator = page.locator(locator);
        } else {
          throw new Error('You must provide either text or a locator for the element screenshot.');
        }

        await elementLocator.waitFor({ state: 'visible', timeout: 5000 });
        await elementLocator.screenshot({ path: screenshotPath });
        console.log(`Screenshot of element saved to: ${screenshotPath}`);
      } else {
        throw new Error('Invalid screenshotType. Please provide either "fullpage" or "element".');
      }
    } catch (error) {
      console.error(`Failed to take screenshot: ${error.message}`);
      throw error;
    }
  }

  // Open link and verify title
  async openLinkAndVerifyTitle(page: Page, linkLocator: string, expectedTitle: string): Promise<void> {
    try {
      const context = page.context();
      const pagePromise = context.waitForEvent('page');

      await page.locator(linkLocator).click();

      const newPage = await pagePromise;
      await expect(newPage).toHaveTitle(expectedTitle);

      await newPage.close();
      console.log(`Successfully opened the link and verified the title: ${expectedTitle}`);
    } catch (error) {
      console.error(`Error while opening the link and verifying the title: ${error.message}`);
      throw error;
    }
  }

  // Interact with iframe and main page
  async interactWithIframeAndMainPage(page: Page, iframeSelector: string, iframeAction: (iframe:  FrameLocator) => Promise<void>, mainPageActionSelector: string): Promise<void> {
    try {
      const iframeElement: Locator = page.locator(iframeSelector);
      const iframe = await iframeElement.contentFrame();

      if (!iframe) {
        throw new Error(`Iframe not found using the selector: ${iframeSelector}`);
      }

      await iframeAction(iframe);
      await page.locator(mainPageActionSelector).click();
    } catch (error) {
      console.error('Error while interacting with iframe and main page:', error);
      throw error;
    }
  }
}



