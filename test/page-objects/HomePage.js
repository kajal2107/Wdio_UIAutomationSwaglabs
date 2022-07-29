import BrowserUtils from "../utils/BrowserUtils"
import ElementUtils from "../utils/ElementUtils"
const expectChai = require('chai').expect;

export default new class HomePage {

    get userNameInput() {
        return $('#user-name')
    }
    get passwordInput() {
        return $('#password')
    }
    get loginButton() {
        return $('#login-button')
    }
    get headerText() {
        return $('span.title')
    }
    async openHomePage() {
        // Navigate to URL and verify home page
        await BrowserUtils.navigateToUrl('https://www.saucedemo.com/')
        await BrowserUtils.maximizeWindow()
        await BrowserUtils.wait(1)
    }
    async enterLoginCredentialsAndClickOnLoginButton(loginData) {
        // Enter username,password and Click on the login button
        await ElementUtils.enterText(this.userNameInput, loginData.userName)
        await ElementUtils.enterText(this.passwordInput, loginData.password)
        await ElementUtils.click(this.loginButton)
        await BrowserUtils.wait(2)

        const title = await BrowserUtils.getPageTitle()
        expectChai(title).to.equal('Swag Labs')
        const headerText = await ElementUtils.getText(this.headerText)
        expectChai(headerText).to.equal('PRODUCTS')
    }

}
