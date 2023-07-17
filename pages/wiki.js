const pageCommands = {
  search(word) {
    this
      .setWindowSize(1280, 900) // to see Search button
      .setValue('@searchBar', word)
      .pause(3000)
      .waitForElementVisible('@submitButton', 'Serch button visible')
      .strictClick({selector: '@submitButton', index: 0});
    return this; // Return page object for chaining
  }
};

module.exports = {
  url: 'http://en.wikipedia.org/',
  commands: [pageCommands],
  elements: {
    welcome: '#mp-welcome',
    searchBar: {selector: '//input[@name="search"]', locateStrategy: 'xpath'},
    submitButton: {selector:'#searchform button'},
    pageTitle: {selector: '#firstHeading', index: 0}
  },
  sections:{
    topMenu: {
      selector: '.vector-menu-content-list',
      elements: {
        logIn: '#pt-login-2 a',
        creatAcc: '#pt-createaccount',
        contributions: '#pt-anoancontribs'
      }
    }
  }
}
