const {Builder, By, Key, until} = require('selenium-webdriver');
let chrome = require('selenium-webdriver/chrome');

module.exports = {
    build: function () {
        var options = new chrome.Options();
        options.addArguments('ignore-certificate-errors');

        return new Builder().forBrowser('chrome')
            .setChromeOptions(options)
            .build();
    }
};