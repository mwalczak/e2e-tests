require('dotenv').config();
let chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, until} = require('selenium-webdriver');
const {expect} = require('chai');

describe('DefaultTest', () => {
    var options = new chrome.Options();
    options.addArguments('ignore-certificate-errors');

    const driver = new Builder().forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    it('should go to home page and login', async () => {
        await driver.get('https://system-staging.inis360.com');
        await driver.sleep(2000);
        await driver.findElement(By.name('username')).sendKeys(process.env.USER);
        await driver.findElement(By.name('password')).sendKeys(process.env.PASSWORD, Key.ENTER);
        await driver.sleep(2000);
        const title = await driver.getTitle();
        expect(title).to.equal('INIS | Dashboard');
    });

    after(async () => driver.quit());
});