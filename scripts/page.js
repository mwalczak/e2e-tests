const {Builder, By, Key, until} = require('selenium-webdriver');

module.exports = {
    login: async function (driver) {
        await driver.get('https://system-staging.inis360.com');
        await driver.wait(until.elementLocated(By.name("username")), 2000);
        await driver.findElement(By.name('username')).sendKeys(process.env.USER);
        await driver.findElement(By.name('password')).sendKeys(process.env.PASSWORD, Key.ENTER);
    }
};