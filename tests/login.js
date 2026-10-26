const { test, expect } = require("@playwright/test")

test("valid login", async function ({ page }) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("((//input[@placeholder='Username'])[1])").fill("Admin")
    await page.getByRole('textbox', { name: 'password' }).fill("admin123")
    // await page.locator("input[placeholder='Password']").fill("admin123")
    await page.locator("//button[@type='submit']").click()
    /*
        await page.waitForTimeout(5000)
        await expect(page).toHaveURL(/dashboard/);
    
        await page.getByTitle("help").click()
        
            await page.getByAltText("profile picture").first().click()
            await page.getByText("Logout").click()
            await expect(page).toHaveURL(/login/);
        */

})
