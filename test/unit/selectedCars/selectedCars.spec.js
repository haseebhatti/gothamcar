describe('Selected Cars', function () {
  'use strict';
  var scope,controller,carServiceFactory,price;
  beforeEach(module('app.selectedCars'));
  beforeEach(inject(function ($rootScope, $controller, carServiceFactory) {
    scope = $rootScope.$new();

    controller = $controller('SelectedCars as sc', {
      $scope: scope,
      carServiceFactory: carServiceFactory

    });
  }));

  describe('Initialization', function () {
    beforeEach(function () {
      price = scope.sc.carServiceFactory;
    });
  });
});
