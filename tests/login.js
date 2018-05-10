var utilas = require('./pages/utilas');

module.exports = {
    '@tags' : ['login'],
    before : function (browser) {
        utilas(browser).openBrowser();
    },
    'go to login page' : function (browser) {
        utilas(browser).loginMainButton();
    },
    'login as admin' : function (browser) {
        utilas(browser).adminLogin();
        browser.pause(2000);
    },
    after : function (browser) {
        browser.pause(5000);
        browser.end();
    }
    
};