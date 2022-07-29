import BrowserUtils from "../utils/BrowserUtils";
import ElementUtils from "../utils/ElementUtils";
const expectChai = require('chai').expect;
export default new class CartPage {
    get quantityOfProduct() {
        return $('div.cart_item')
    }
    get headerText() {
        return $('span.title')
    }
    get checkOutButton() {
        return $('#checkout')
    }
    get cartQuantity() {
        return $('span.shopping_cart_badge')
    }
    async verifyHeaderTextAndProductQuantity(YourCartPageData) {
        // Verify header and quantity of product
        const getHeaderText = await ElementUtils.getText(this.headerText)
        expectChai(getHeaderText).to.equal(YourCartPageData.headerText)

        const listItems = this.quantityOfProduct
        expect(listItems).toHaveChildren(2)
    }
    async verifyCartQuantityAndClickOnCheckOutButton() {
        // Verify cart quantity and click on checkout button
        const cartQuantity = await ElementUtils.getText(this.cartQuantity);
        expectChai(cartQuantity).to.equal('2')

        await ElementUtils.click(this.checkOutButton)
        await BrowserUtils.wait(2)

        expectChai(await browser.getUrl()).to.include('/checkout-step-one.html');
    }
}
