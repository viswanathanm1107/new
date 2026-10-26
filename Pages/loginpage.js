
const { expect } = require("@playwright/test")

export class LoginPage {

    // new changes for read me

    constructor(page) {

        this.page = page
        this.username = page.getByRole('textbox', { name: 'Enter Email' })
        this.password = page.getByPlaceholder('Enter Password')
        this.loginbutton = page.getByRole('button', { name: 'Sign in' })
        this.signverify = page.getByRole('heading', { name: 'Sign In' })

    }

    async checksign() {

        expect(this.signverify).toBeVisible()

    }

    async loginApplication(email, password) {

        await this.username.fill(email)
        await this.password.fill(password)
        await this.loginbutton.click()

    }
}
