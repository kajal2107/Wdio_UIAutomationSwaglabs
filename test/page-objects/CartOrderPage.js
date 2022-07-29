import BrowserUtils from "../utils/BrowserUtils"
import ElementUtils from "../utils/ElementUtils"
const expectChai = require('chai').expect;

export default new class CartOrderPage {
    get headerText() {
        return $('span.title')
    }
    get cartQuantity() {
        return $('span.shopping_cart_badge')
    }
    get quantityOfProduct() {
        return $('div.cart_item')
    }
    get itemTotalPrice() {
        return $('div.summary_subtotal_label')
    }
    get taxPrice() {
        return $('div.summary_tax_label')
    }
    get finalSummary() {
        return $('div.summary_total_label')
    }
    get finishButton() {
        return $('#finish')
    }
    async verifyHeaderAndCartQuantity(CartOrderPageData) {

        // Verify header text and cart quantity
        const getHeaderText = await ElementUtils.getText(this.headerText)
        expectChai(getHeaderText).to.equal(CartOrderPageData.headerText)

        const cartQuantity = await ElementUtils.getText(this.cartQuantity);
        expectChai(cartQuantity).to.equal('2')

        const listItems = this.quantityOfProduct
        expect(listItems).toHaveChildren(2)
    }
    async verifySummaryOfCart(ProductPageData) {

        // Verify Summary of cart 
        var firstProductPrice = await $('//div[text()="' + ProductPageData.firstProduct + '"]/parent::a/following-sibling::div[2]').getText()
        var secondProductPrice = await $('//div[text()="' + ProductPageData.secondProduct + '"]/parent::a/following-sibling::div[2]').getText()

        firstProductPrice = firstProductPrice.replace('$', '').trim()
        secondProductPrice = secondProductPrice.replace('$', '').trim()

        var totalItemPrice = parseFloat(firstProductPrice) + parseFloat(secondProductPrice)

        var itemTotalPrice = await ElementUtils.getText(this.itemTotalPrice)
        itemTotalPrice = itemTotalPrice.replace('Item total: $', '').trim()

        expectChai(parseFloat(itemTotalPrice)).to.equal(parseFloat(totalItemPrice))

        var taxPrice = await ElementUtils.getText(this.taxPrice)
        taxPrice = taxPrice.replace('Tax: $', '').trim()
 
        var finalAmount = parseFloat(totalItemPrice) + parseFloat(taxPrice)

        var totalSummary = await ElementUtils.getText(this.finalSummary)
        totalSummary = totalSummary.replace('Total: $', '').trim();

        expectChai(parseFloat(totalSummary)).to.equal(parseFloat(finalAmount))
    }
    async clickOnFinishButton() {
        // Click on finish button  and verify finish page
        ElementUtils.click(this.finishButton)
        await BrowserUtils.wait(2)

        expectChai(await browser.getUrl()).to.include('/checkout-complete.html');
        await BrowserUtils.wait(2)
    }
}
