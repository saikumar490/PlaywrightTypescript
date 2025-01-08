// hooks.ts
import { test, chromium, firefox, webkit, Browser, Page } from '@playwright/test';
import { urls, browser as browserConfig } from '../Support/constants';  // Import constants (URLs, browser)

// Define a global variable for page and browserInstance to be used across tests
declare global {
    var page: Page;
    var browserInstance: Browser;
}

// Common Setup and Teardown Hooks

// Hook to run before all tests
export async function setup() {
    console.log('Executing before all tests...');
    
    let browserInstance: Browser | undefined;

    // Dynamically launch the specified browser based on the `browserConfig` variable
    if (browserConfig === 'chrome') {
        browserInstance = await chromium.launch();  // Launch Chromium (Chrome)
    } else if (browserConfig === 'firefox') {
        browserInstance = await firefox.launch();  // Launch Firefox
    } else if (browserConfig === 'webkit') {
        browserInstance = await webkit.launch();  // Launch WebKit (Safari engine)
    } else if (browserConfig === 'safari') {
        browserInstance = await webkit.launch();  // Safari is supported via WebKit
    } else {
        throw new Error('Unsupported browser type');
    }

    if (!browserInstance) {
        throw new Error('Failed to launch browser');
    }

    // const context = await browserInstance.newContext();
    // const page = await context.newPage();

    // Navigate to Admin URL
    await page.goto(urls.AdminUrl, { waitUntil: 'load' });
    await page.waitForLoadState('networkidle');

    // Store the browser instance and page for use in your tests
    global.page = page;
    global.browserInstance = browserInstance;

    console.log(`Navigated to ${urls.AdminUrl} using ${browserConfig}`);
}

// Hook to run after all tests
export async function teardown() {
    console.log('Executing after all tests...');

    // Cleanup: Close the browser instance after tests
    if (global.browserInstance) {
        await global.browserInstance.close();
    }
}
