describe('SelectedCarsCtrl', function () {
  'use strict';
  var scope,controller,SelectedCarsFactory;
  beforeEach(module('app.checkout'));
  beforeEach(inject(function ($rootScope, $controller, _SelectedCarsFactory_) {
    scope = $rootScope.$new();
    spyOn(_SelectedCarsFactory_, 'getKart');
    spyOn(_SelectedCarsFactory_, 'buy').and.returnValue('Mock Buy Response');

    SelectedCarsFactory = _SelectedCarsFactory_;

    controller = $controller('SelectedCarsCtrl as sc', {
      $scope: scope,
      SelectedCarsFactory: _SelectedCarsFactory_
    });
  }));
  describe('Initialized', function () {
    it('should call getKart', function () {
      expect(SelectedCarsFactory.getKart).toHaveBeenCalled();
    });
  });
  it('should call buy when controller buy method is called', function () {
    controller.buy({name: 'car'});
    expect(SelectedCarsFactory.buy).toHaveBeenCalledWith({name: 'car'});
  });
  it('should set display when controller buy is called', function () {
    controller.buy({name: 'viper'});
    expect(controller.display).toEqual('Mock Buy Response');
  });

  it('should define kart list controller', function () {
    expect(controller).toBeDefined();
  });
});
