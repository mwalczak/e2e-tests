require('dotenv').config();
let driver = require('./driver');
let page = require('./page');
const {Builder, By, Key, until} = require('selenium-webdriver');
const {expect} = require('chai');

describe('DefaultTest', () => {
    const drv = driver.build();

    it('should go to home page and login', async () => {
        await page.login(drv);
        await drv.wait(until.elementLocated(By.className("program-title")), 2000);
        const title = await drv.getTitle();
        expect(title).to.equal('INIS | Dashboard');
    });

    after(async () => drv.quit());
});