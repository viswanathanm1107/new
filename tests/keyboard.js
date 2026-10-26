import { test, expect } from "@playwright/test"

// This is a test commit for learning PR workflows.

test("keyboard", async function ({ page }) {

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#name').fill("Viswa")

    await page.keyboard.press('Control+A')

    await page.keyboard.press('Control+C')

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    await page.keyboard.press('Control+V')

    await page.waitForTimeout(3000)

    await page.keyboard.press('Control+C')

    await page.waitForTimeout(3000)

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    await page.keyboard.press('Control+V')

    await page.waitForTimeout(3000)


})