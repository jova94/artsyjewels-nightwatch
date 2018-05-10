module.exports = {
    'Demo test Google' : function (client) {
      client
        .url('http://www.google.com')
        .waitForElementVisible('body', 3000)
        .assert.title('Google') 
        .submit('#gbqfbb')
        .pause(2000)
        .end();
    }
  };