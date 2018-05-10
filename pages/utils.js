module.exports = function (browser) {
    this.openBrowser = function () {
        browser
         .windowMaximize()
         .url('http://artsyjewels.com/')
         .waitForelementVisible('body', 2000);
         return browser;
    };
    this.loginMainButton = function () {
        browser
        .click('.float-right>li:nth-child(2)>a:nth-child(1)')
        .waitForelementVisible('body', 2000);
    };
    this.adminLogin = function () {
        browser
        .setValue('#id_username', 'admin@admin.com')
        .setValue('#id_password', '')
        .click('#customer_login > div > input')
    };
    this.featuredProductAddtoCart = function () {
        browser
        .click('#AddToCart-1509217610578')
    };
    this.shopnowButton = function () {
        browser
        .click('##shopify-section-hero > div > div > div > a')
        .waitForelementVisible('body', 2000);
        browser.assert.containsText('#shopify-section-collection-template > div > header > div.page-width > div > h1', 'Best sellers');
    };
    this.mainEarringHeader = function () {
        .click('#SiteNav > li:nth-child(3) > a > svg')
        
    };
    this.pearlEarrings = function () {
        .click('#SiteNavLabel-earrings > ul > li:nth-child(2) > a')
        .waitForelementVisible('body', 2000);
    };
    this.chandelier = function () {
        .click('#SiteNavLabel-earrings > ul > li:nth-child(3) > a')
        .waitForelementVisible('body', 2000);
    };
    this.climbers = function () {
        .click('#SiteNavLabel-earrings > ul > li:nth-child(4) > a')
        .waitForelementVisible('body', 2000);
    };
    this.clipon = function () {
        .click('#SiteNavLabel-earrings > ul > li:nth-child(5) > a')
        .waitForelementVisible('body', 2000);
    };
    this.cuffs = function () {
        .click('#SiteNavLabel-earrings > ul > li:nth-child(6) > a')
        .waitForelementVisible('body', 2000);
    };
    this.frenchwires = function () {
        .click('#SiteNavLabel-earrings > ul > li:nth-child(7) > a')
        .waitForelementVisible('body', 2000);
    };


    return this;
}