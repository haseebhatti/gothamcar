describe('Routing', function () {
  'use strict';
  var $rootScope,$state,$location;
  beforeEach(module('app.checkout', 'app.routing'));
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    var $templateCache = $injector.get('$templateCache');
    $templateCache.put('gothamCar/checkout/checkout.tpl.html', '');
    $templateCache.put('gothamCar/home/homePage.tpl.html', '');
  }));

  it('should respond when state is cart', function () {
    $state.go('cart');
    $rootScope.$digest();
    expect($state.current.url).toEqual('/cart');
    expect($location.$$path).toEqual('/cart');
  });
  it('should got to cars when url is invalid', function () {
    $location.url('/stuff');
    $rootScope.$digest();
    expect($state.current.url).toEqual('/cars');
    expect($location.$$path).toEqual('/cars');
  });
});
