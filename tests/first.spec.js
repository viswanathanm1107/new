// @ts-check
/*import { test, expect } from '@playwright/test';
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
*/

import { test } from '@playwright/test';
import { LoginPage } from '../Pages/loginpage';

// Test Case 1
test('User Login with Admin Account', async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  const loginPage = new LoginPage(page);
  await loginPage.loginApplication("adminviswa@gmail.com", "Duke@8228");
});

// Test Case 2
test('User Login with Invalid Password', async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  const loginPage = new LoginPage(page);
  await loginPage.loginApplication("adminviswa@gmail.com", "WrongPassword");
});

// Test Case 3
test('User Login with Blank Fields', async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");
  const loginPage = new LoginPage(page);
  await loginPage.loginApplication("", "");
});

