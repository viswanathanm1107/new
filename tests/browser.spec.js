const { test, expect } = require('@playwright/test')

test("browsercontest", async function ({ browser }) {

    const context1 = await browser.newContext()
    const context2 = await browser.newContext()

    const page1 = await context1.newPage()
    const page2 = await context2.newPage()


    await page1.goto("https://playwright.dev/docs/api/class-browsercontext")
    await page1.waitForTimeout(3000)


    await page2.goto("https://testautomationpractice.blogspot.com/")
    await page2.waitForTimeout(3000)


    await page1.close()
    await page2.close()

    await context1.close()
    await context2.close()

})
