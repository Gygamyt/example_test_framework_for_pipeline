import {test} from '@playwright/test';
import {Page} from "playwright/test";
import {PageManager} from "../src/PageManager";


test.describe('E2E UI', async () => {
    let page: Page;
    let pageManager: PageManager;

    test.beforeEach(async ({browser}) => {
        page = await browser.newPage();
        await page.goto('/');
        pageManager = new PageManager(page);
    });

    test.afterEach(async () => {
        await page.close();
    })

    test('Login test sanity @sanity', async () => {
        await pageManager.header.clickOnSignUpElement()
    })

    test('Login test smoke @smoke', async () => {
        await pageManager.header.clickOnSignUpElement()
    })
})
