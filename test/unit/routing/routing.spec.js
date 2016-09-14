describe('Routing', function () {
  'use strict';
  var $rootScope,$state,$location;
  beforeEach(module('app.checkout', 'app.routing'));
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    var $templateCache = $injector.get('$templateCache');
    $templateCache.put('gothamMovie/checkout/checkout.tpl.html', '');
    $templateCache.put('gothamMovie/home/homePage.tpl.html', '');
  }));

  it('should respond when state is moviet', function () {
    $state.go('moviet');
    $rootScope.$digest();
    expect($state.current.url).toEqual('/moviet');
    expect($location.$$path).toEqual('/moviet');
  });
  it('should got to movies when url is invalid', function () {
    $location.url('/stuff');
    $rootScope.$digest();
    expect($state.current.url).toEqual('/movies');
    expect($location.$$path).toEqual('/movies');
  });
});
