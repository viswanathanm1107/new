// @ts-check
import { test, expect } from '@playwright/test';
const { LoginPage } = require("../Pages/loginpage");
const { HomePage } = require("../Pages/homepage");

test('User Login', async ({ page }) => {

  page.goto("https://freelance-learn-automation.vercel.app/login")

  const loginPage = new LoginPage(page)

  // Newchnages for read megit

  await loginPage.loginApplication("adminviswa@gmail.com", "Duke@8228")

  await page.waitForTimeout(5000)

  const homepage = new HomePage(page)

  await homepage.verifycart()

  await homepage.LogoutApplication()


  await loginPage.checksign

})

