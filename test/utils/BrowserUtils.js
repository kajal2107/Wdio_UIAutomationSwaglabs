class BrowserUtils{

     getPageTitle(){
        return  browser.getTitle();
    }

    navigateToUrl(url){
        return browser.url(url);
    }

   async maximizeWindow()
    {
        await browser.maximizeWindow();
    }

    async wait(seconds)
    {
      await browser.pause(seconds * 1000);
    }
}

export default new BrowserUtils()


//Detailed Info https://webdriver.io/docs/api/browser/$$.html