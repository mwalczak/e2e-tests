require('dotenv').config();
let driver = require('../page/driver');
let page = require('../page/page');
const dashboardPage = require('../model/dashboardPage');
const programPage = require('../model/programPage');
const {Builder, By, Key, until} = require('selenium-webdriver');
const {expect} = require('chai');

describe('DefaultTest', () => {
    const drv = driver.build();

    it('should go to new program page after clicking button on homepage', async () => {
        await page.login(drv);
        await drv.wait(until.elementLocated(By.className(dashboardPage.NEW_PROGRAM_BUTTON)), 2000);
        await drv.findElement(By.partialLinkText(dashboardPage.NEW_PROGRAM_LINK)).click();
        await drv.wait(until.elementLocated(By.className(programPage.PROGRAM_SEARCH)), 2000);
    });

    after(async () => drv.quit());
});