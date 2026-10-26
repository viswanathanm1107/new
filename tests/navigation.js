const { test, expect } = require("@playwright/test")
const path = require("node:path")
/*
test("navigation", async function ({ page }) {

    await page.goto("https://www.google.com/")
    await page.waitForTimeout(2000)
    await page.getByRole("link", { name: "Gmail" }).click()
    await page.waitForTimeout(2000)
    await page.goBack()
    await page.waitForTimeout(2000)
    await page.goForward()
    await page.waitForTimeout(2000)
    await page.reload()
    await page.waitForTimeout(5000)

})
    */


test("screenshot", async function ({ page }) {


    await page.goto("https://testautomationpractice.blogspot.com/")

    //  const vis = await page.locator('button.submit-btn')

    // await vis.screenshot({ path: "screenshot/viswa1.png" })


    await page.pdf({
        path: "screenshot/viswa4.pdf", // Saved as a .pdf extension
        format: "A4",                  // Paper size
        printBackground: true          // Keeps background colors, forms, and images intact
    });

})