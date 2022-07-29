class ElementUtils {

    async click(element) {
        await element.waitForClickable()
        await element.click();
    }

    async enterText(element, value) {
        await element.waitForDisplayed()
        await element.setValue("")
        await browser.keys(['\uE009', 'a'])
        await browser.keys(['\uE05D'])
        await element.setValue(value)
    }

    getText(element) {
        element.waitForDisplayed();
        return element.getText();
    }

    isDisplayed(element) {
        return element.isDisplayed();
    }

    isEnabled(element) {
        return element.isEnabled();
    }

    async scrollToElement(element) {
        await element.scrollIntoView();
    }

    moveToElement(element) {
        element.waitForDisplayed();

        const [sourceX, sourceY] = [element.getLocation('x'), element.getLocation('y')];

        browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'mouse' },
            actions: [
                { type: 'pointerMove', duration: 0, x: sourceX, y: sourceY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 500 }, // emulate human pause
                { type: 'pointerMove', duration: 1000, origin: 'pointer', x: 15, y: 15 }
            ]
        }]);

    }

    async selectDropdownByText(element, text) {
        await element.selectByVisibleText(text);
    }

    async selectDropdownByValue(element, value) {
        await element.selectByAttribute('value', value);
    }

    //Element must be declared using $$("#mp-topbanner > ul > li")
    clickOnFirstVisibleElementFromList(element) {
        element.map(function (e) {
            if (e.isDisplayed()) {
                e.scrollIntoView();
                e.waitForClickable()
                e.click();
            }
        })
    }

    //Element must be declared using $$("#mp-topbanner > ul > li")
    getFirstVisibleElementFromList(element) {
        element.map(function (e) {
            if (e.isDisplayed()) {
                return e
            }
        })
    }
}

export default new ElementUtils()

//For more info : https://webdriver.io/docs/api/element/$$.html
