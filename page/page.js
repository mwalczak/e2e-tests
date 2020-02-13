const {Builder, By, Key, until} = require('selenium-webdriver');
const loginPage = require('../model/loginPage');

module.exports = {
    login: async function (drv) {
        await drv.get('https://system-staging.inis360.com');
        await drv.wait(until.elementLocated(By.name(loginPage.USERNAME)), 2000);
        await drv.findElement(By.name(loginPage.USERNAME)).sendKeys(process.env.USER);
        await drv.findElement(By.name(loginPage.PASSWORD)).sendKeys(process.env.PASSWORD, Key.ENTER);
    }
};