import BrowserUtils from "../utils/BrowserUtils"
import ElementUtils from "../utils/ElementUtils"
const expectChai = require('chai').expect;
export default new class ProductPage {
    get cartQuantity() {
        return $('span.shopping_cart_badge')
    }
    get cartButton() {
        return $('a.shopping_cart_link')
    }
    async clickAddToCartButtonOfProduct(ProductPageData) {

        // Click on add to cart button and verify cart quantity
        await $('//div[text()="' + ProductPageData.firstProduct + '"]/ancestor::div[1]/following-sibling::div//button').click()
        await $('//div[text()="' + ProductPageData.secondProduct + '"]/ancestor::div[1]/following-sibling::div//button').click()
        const cartQuantity = await ElementUtils.getText(this.cartQuantity);
        expectChai(cartQuantity).to.equal('2')
    }
    async clickOnCartButton() {

        // Click on Cart button and verify your cart page
        await ElementUtils.click(this.cartButton)
        expectChai(await browser.getUrl()).to.include('/cart.html');
        await BrowserUtils.wait(2)
        //await browser.pause(2000)
    }
}
