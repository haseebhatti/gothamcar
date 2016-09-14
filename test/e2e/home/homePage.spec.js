var homePage = require('./homePage');
'use strict';
describe('Gotham Cars', function () {
  beforeEach(function () {});
  it('should have a title of Gotham Car', function () {
    expect(homePage.getTitle()).toEqual('Gotham Car');
  });
  it('should have car button active', function () {
    expect(homePage.getActiveButtonText()).toBe('Cars');
  });
});
