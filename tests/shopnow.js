var utilas = require('./pages/utilas');

module.exports = {
    '@tags' : ['shopnow'],
    before : function (browser) {
        utilas(browser).openBrowser();
    },
    'Click on Main Shop now button' : function (browser) {
        utilas(beowser).shopnowButton();
    },
    after : function (browser) {
        browser.pause(5000);
        browser.end();
    }
    
};