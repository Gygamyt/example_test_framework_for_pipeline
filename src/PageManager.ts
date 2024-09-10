import {Page} from "playwright/test";
import {Header} from "./page_objects/Header";
import {BasePage} from "./page_objects/BasePage";
import {MainPage} from "./page_objects/MainPage";

export class PageManager {
    page: Page;
    header: Header;
    mainPage: MainPage;

    constructor(page: Page) {
        this.page = page;
        this.header = new Header(page)
        this.mainPage = new MainPage(page)
    }
}