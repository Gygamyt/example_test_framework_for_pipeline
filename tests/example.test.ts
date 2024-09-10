import {test, expect} from '@playwright/test';
import {Page} from "playwright/test";
import {PageManager} from "../src/PageManager";


test.describe('E2E UI', async () => {
    let page: Page;
    let pageManager: PageManager;

    test.beforeEach(async ({browser}) => {
        page = await browser.newPage();
        await page.goto('http://127.0.0.1:8000/');
        pageManager = new PageManager(page);
    });

    test.afterEach(async () => {
        await page.close();
    })

    test('Login test', async () => {
        await pageManager.header.clickOnSignUpElement()
    })
})

