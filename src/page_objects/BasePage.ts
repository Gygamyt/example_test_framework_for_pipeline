import {expect, Page} from '@playwright/test';

export abstract class BasePage {
    readonly page: Page;

    protected constructor(page: Page) {
        this.page = page;
    };
}
