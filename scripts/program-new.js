require('dotenv').config();
let driver = require('../page/driver');
let page = require('../page/page');
const {Builder, By, Key, until} = require('selenium-webdriver');
const {expect} = require('chai');

describe('DefaultTest', () => {
    const drv = driver.build();

    it('should go to new program page after clicking button on homepage', async () => {
        await page.login(drv);
        await drv.wait(until.elementLocated(By.className("new-program-button")), 2000);
        await drv.findElement(By.partialLinkText('Nowy Program')).click();
        await drv.wait(until.elementLocated(By.className("program-search")), 2000);
    });

    after(async () => drv.quit());
});