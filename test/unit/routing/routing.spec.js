describe('Routing', function () {
  'use strict';
  var $rootScope,$state;
  beforeEach(module('app.checkout', 'app.routing'));
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');

    var $templateCache = $injector.get('$templateCache');
    $templateCache.put('gothamMovie/checkout/checkout.tpl.html', '');
    $templateCache.put('gothamMovie/home/homePage.tpl.html', '');
  }));

  it('should respond when state is cart', function () {
    $state.go('checkout');
    $rootScope.$digest();
    expect($state.current.url).toEqual('/checkout');
  });
  it('should got to movies when url is invalid', function () {
    //  $location.url('/stuff')
    $rootScope.$digest();
    expect($state.current.url).toEqual('/movies');
  });
});
