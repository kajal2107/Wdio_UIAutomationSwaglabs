// Page Object
import HomePage from '../page-objects/HomePage'
import ProductPage from '../page-objects/ProductPage'
import YourCartPage from '../page-objects/YourCartPage'
import CheckoutPage from '../page-objects/CheckoutPage'
import CartOrderPage from '../page-objects/CartOrderPage'
import finishPage from '../page-objects/FinishPage'

// Page Data
import { LoginData } from '../data-factory/LoginPage'
import { ProductPageData } from '../data-factory/ProductPage'
import { YourCartPageData } from '../data-factory/YourCartPage'
import { CheckoutPageData } from '../data-factory/CheckoutPage'
import { CartOrderPageData } from '../data-factory/CartOrderPage'
import { FinishPageData } from '../data-factory/FinishPage'



describe('Verify that user successfully purchase the products', () => {
    it('Navigate to URL and verify homePage', async () => {
        await HomePage.openHomePage()
        await HomePage.enterLoginCredentialsAndClickOnLoginButton(LoginData)

    });
    it('Click on Add to cart button and verify the cart quantity', async () => {
        await ProductPage.clickAddToCartButtonOfProduct(ProductPageData)
        await ProductPage.clickOnCartButton()

    })
    it('Verify product quantity and click on checkout button', async () => {
        await YourCartPage.verifyHeaderTextAndProductQuantity(YourCartPageData)
        await YourCartPage.verifyCartQuantityAndClickOnCheckOutButton()
    })
    it('Fill up the checkout information and click on continue button', async () => {
        await CheckoutPage.verifyHeaderAndCartQuantity(CheckoutPageData)
        await CheckoutPage.fillUpCheckoutFormAndClickOnContinueButton(CheckoutPageData)
    })
    it('Verify cart summary and click on Finish button', async () => {
        await CartOrderPage.verifyHeaderAndCartQuantity(CartOrderPageData)
        await CartOrderPage.verifySummaryOfCart(ProductPageData)
        await CartOrderPage.clickOnFinishButton()
    })
    it('Verify Finish Page', async () => {
        await finishPage.verifyHeaderTextAndOrderMessage(FinishPageData)
    })
});


