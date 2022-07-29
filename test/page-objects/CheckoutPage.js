import BrowserUtils from "../utils/BrowserUtils"
import ElementUtils from "../utils/ElementUtils"
const expectChai = require('chai').expect;
export default new class CheckoutPage {
    get headerText() {
        return $('span.title')
    }
    get cartQuantity() {
        return $('span.shopping_cart_badge')
    }
    get firstNameInput() {
        return $('#first-name')
    }
    get lastNameInput() {
        return $('#last-name')
    }
    get postalCodeInput() {
        return $('#postal-code')
    }
    get continueButton() {
        return $('#continue')
    }
    async verifyHeaderAndCartQuantity(CheckoutPageData) {
        // Verify Header text and cart quantity
        const getHeaderText = await ElementUtils.getText(this.headerText)
        expectChai(getHeaderText).to.equal(CheckoutPageData.headerText)

        const cartQuantity = await ElementUtils.getText(this.cartQuantity);
        expectChai(cartQuantity).to.equal('2')
    }
    async fillUpCheckoutFormAndClickOnContinueButton(CheckoutPageData) {
        // Fill up the form and click on continue button
        ElementUtils.enterText(this.firstNameInput, CheckoutPageData.firstName)
        ElementUtils.enterText(this.lastNameInput, CheckoutPageData.lastName)
        ElementUtils.enterText(this.postalCodeInput, CheckoutPageData.postalCode)
        await BrowserUtils.wait(2)

        ElementUtils.click(this.continueButton)
        await BrowserUtils.wait(2)
        expectChai(await browser.getUrl()).to.include('/checkout-step-two.html');
    }
}
