
var utilas = require('./pages/utilas');

module.exports = {
    '@tags' : ['earrings'],
    before : function (browser) {
        utilas(browser).openBrowser();
    },
    'Click on Main Earrings Header' : function (browser) {
        utilas(beowser).(mainEarringHeader);
    },
    'Click on Pearl Earrings' : function (browser) {
        utilas(browser).pearlEarrings();
    },
    'Click on chandelier Earrings' : function (browser) {
        utilas(beowser).(mainEarringHeader);
        utilas(browser).chandelier();
    },
    'Click on climbers Earrings' : function (browser) {
        utilas(beowser).(mainEarringHeader);
        utilas(browser).climbers();
    },
    'Click on clipon Earrings' : function (browser) {
        utilas(beowser).(mainEarringHeader);
        utilas(browser).clipon();
    },
    'Click on cuffs Earrings' : function (browser) {
        utilas(beowser).(mainEarringHeader);
        utilas(browser).cuffsl();
    },
    'Click on frenchwires Earrings' : function (browser) {
        utilas(beowser).(mainEarringHeader);
        utilas(browser).frenchwires();
    },
    after : function (browser) {
        browser.pause(5000);
        browser.end();
    }
    
};