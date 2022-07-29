describe('Test', () => {
    it('Test Check', async () => {
        await browser.url('https://www.skype.com/en/features/skype-web/')
        await browser.maximizeWindow();
        await $('div.colContent a[href="https://web.skype.com/"]').click()
        await $('input[type="email"]').setValue('raj@jignect.tech')
        await $("input[type='submit']").click()
        await browser.pause(3000)
        await $("input[type='password']").setValue('Patel0802@')
        await $("input[type='submit']").click()
        await browser.pause(3000)
        await $("input[type='submit']").click()
        await browser.pause(8000)
        await $("div[data-text-as-pseudo-element='Test']").click()
        await browser.pause(3000)
        // for (var i = 0; i < 10; i++) {
        //     await $("div[role='textbox']").setValue('Good Morning')
        //     await browser.keys("\uE007");
        // }
      
        // await $("//div[@role='heading']//*[@data-text-as-pseudo-element='Today']/ancestor::div[2]/following-sibling::div[1]/div[@role='none']//*[contains(text(),'PM')]/parent::*/following-sibling::*//*[contains(text(),'Good')]").click();
        // await $("//button[@title='More options']//div[@role='none']//*[name()='svg']").click()
        // await browser.pause(2000)
        // await $("//div[@data-text-as-pseudo-element='Remove']").click()
        // await $("//button[@*='Remove']").click()
        // await browser.pause(2000)

    

    //      const list = await $("//div[@role='region']//*[text()='Good Morning']")
        //   const elementList = await $$("//div[@role='region']//*[text()='Good Morning']").filter(function (link){
        //       return link.length;
        //   });
        //  expect(elementList.length()).to.be.equal(8)
         // console.log("List of length is "+elementList.length)


        

    })
})