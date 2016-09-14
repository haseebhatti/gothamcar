describe('MyCtrl', function () {
  'use strict';
  var scope,controller, appDetails;
  beforeEach(module('app.homePage'));
  beforeEach(inject(function ($rootScope, $controller, appDetails) {
    scope = $rootScope.$new();

    controller = $controller('HomePageCtrl as hpc', {
      $scope: scope,
      appDetails: appDetails
    });
  }));
  describe('Initialization', function () {
    beforeEach(function () {
      appDetails = scope.hpc.appDetails;
    });
    it('should have default title ', function () {
      expect(appDetails.title).toEqual('Gotham Movies');
    });
    it('should have default tagline', function () {
      expect(appDetails.tagline).toEqual('We have all kinds of movies');
    });
  });
});
