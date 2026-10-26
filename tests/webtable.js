import { test, expect } from '@playwright/test'


test("web table", async function ({ page }) {

    await page.locator('#productTable')

    const coloumn = await page.locator('thead tr th')
    console.log(await coloumn.count())
    // expect(await coloumn.count()).toBe(4)

    const row = await page.locator('tbody tr')
    console.log(await row.count())
    // expect(await row.count()).toBe(4)

    const matchedRow = row.filter({

        has: page.locator('td'),
        hasText: 'Laptop'

    })

    matchedRow.locator('input').check()

})