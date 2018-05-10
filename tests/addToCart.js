var utilas = require('./pages/utilas');

module.exports = {
    '@tags' : ['addToCart'],
    before : function (browser) {
        utilas(browser).openBrowser();
    },
    'Add a featured product to cart' : function (browser) {
        utilas(beowser).featuredProductAddtoCar();
    },
    after : function (browser) {
        browser.pause(5000);
        browser.end();
    }
    
};