const { test, expect } = require('@playwright/test')

test("my first test", async function ({ page }) {
    await page.goto("https://www.facebook.com/")
    const url = page.url()
    console.log("url is " + url)
    const title = await page.title()

    console.log("title is " + title)
    await expect(page).toHaveTitle("Facebook")
})

test("failing assertion example", async function ({ page }) {

    expect(1).toBe(1)

})

test("passing assertion example", async function ({ page }) {

    expect(1.1).toBe(1.1)
    //
})
