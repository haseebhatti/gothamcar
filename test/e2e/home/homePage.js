var homePage = (function () {
  'use strict';
  browser.get('index.html');

  var title = element(by.binding('hpc.appDetails.title'));
  var activeButton = element(by.css('.nav > .active a'));
  function getTitle () {
    return title.getText();
  }
  function getActiveButtonText () {
    return activeButton.getText();
  }

  return {
    getTitle: getTitle,
    getActiveButtonText: getActiveButtonText
  };
}());

module.exports = homePage;
