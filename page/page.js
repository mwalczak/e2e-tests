const {Builder, By, Key, until} = require('selenium-webdriver');

module.exports = {
    login: async function (drv) {
        await drv.get('https://system-staging.inis360.com');
        await drv.wait(until.elementLocated(By.name("username")), 2000);
        await drv.findElement(By.name('username')).sendKeys(process.env.USER);
        await drv.findElement(By.name('password')).sendKeys(process.env.PASSWORD, Key.ENTER);
    }
};