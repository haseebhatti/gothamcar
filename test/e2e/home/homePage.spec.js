var homePage = require('./homePage');
'use strict';
describe('Gotham movies', function () {
  beforeEach(function () {});
  it('should have a title of Gotham movie', function () {
    expect(homePage.getTitle()).toEqual('Gotham movie');
  });
  it('should have movie button active', function () {
    expect(homePage.getActiveButtonText()).toBe('movies');
  });
});
