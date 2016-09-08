describe('Routing', function () {
  'use strict';
  var $rootScope,$state,$location,$httpBackend;
  beforeEach(module('app.checkout', 'app.routing'));
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $httpBackend = $injector.get('$httpBackend');

    // $httpBackend.expectGET('test.html').respond({status: 200, data: ''})
    $httpBackend.expectGET('index.html').respond({status: 200, data: ''});
    $httpBackend.expectGET('checkout.html').respond({status: 200, data: ''});
  // homepage = $httpBackend.when('GET', 'index.html')
  //   .respond('you are in index.html')
  }));
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  xit('should respond when state is cart', function () {
    $state.go('cart');
    $httpBackend.flush();
    expect($state.current.url).toEqual('/cart');
    expect($location.$$path).toEqual('/cart');
  });
});
