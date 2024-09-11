import {BasePage} from "./BasePage";
import {Page} from "playwright/test";

export class Header extends BasePage {

    constructor(page: Page) {
        super(page);
    }

    private buttons = {
        mainLinkElement: this.page.getByRole('link', { name: 'pierog & bulka' }),
        signUpButton: this.page.getByRole('link', { name: 'Signup' }),
        logInButton: this.page.getByRole('link', { name: 'Login' }),
        cartButton: this.page.getByRole('link', { name: ' Cart' })
    }

    async clickOnSignUpElement() {
        await this.buttons.signUpButton.click();
    }
}
