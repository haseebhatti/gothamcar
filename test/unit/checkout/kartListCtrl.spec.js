describe('SelectedmoviesCtrl', function () {
  'use strict';
  var scope,controller,SelectedmoviesFactory;
  beforeEach(module('app.checkout'));
  beforeEach(inject(function ($rootScope, $controller, _SelectedmoviesFactory_) {
    scope = $rootScope.$new();
    spyOn(_SelectedmoviesFactory_, 'getKart');
    spyOn(_SelectedmoviesFactory_, 'buy').and.returnValue('Mock Buy Response');

    SelectedmoviesFactory = _SelectedmoviesFactory_;

    controller = $controller('SelectedmoviesCtrl as sc', {
      $scope: scope,
      SelectedmoviesFactory: _SelectedmoviesFactory_
    });
  }));
  describe('Initialized', function () {
    it('should call getKart', function () {
      expect(SelectedmoviesFactory.getKart).toHaveBeenCalled();
    });
  });
  it('should call buy when controller buy method is called', function () {
    controller.buy({name: 'movie'});
    expect(SelectedmoviesFactory.buy).toHaveBeenCalledWith({name: 'movie'});
  });
  it('should set display when controller buy is called', function () {
    controller.buy({name: 'viper'});
    expect(controller.display).toEqual('Mock Buy Response');
  });

  it('should define kart list controller', function () {
    expect(controller).toBeDefined();
  });
});
