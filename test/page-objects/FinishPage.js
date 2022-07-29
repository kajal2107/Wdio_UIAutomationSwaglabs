import BrowserUtils from "../utils/BrowserUtils"
import ElementUtils from "../utils/ElementUtils"
const expectChai = require('chai').expect;
export default new class FinishPage {
    get headerText() {
        return $('span.title')
    }
    get orderMessage() {
        return $('h2.complete-header')
    }
    async verifyHeaderTextAndOrderMessage(FinishPageData) {
        // Verify header text and order message of finish page
        const getHeaderText = await ElementUtils.getText(this.headerText)
        expectChai(getHeaderText).to.equal(FinishPageData.headerText)

        const getOrderMessage = await ElementUtils.getText(this.orderMessage)
        expectChai(getOrderMessage).to.equal(FinishPageData.orderMessage)
        BrowserUtils.wait(2)
    }
}