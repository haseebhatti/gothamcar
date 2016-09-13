describe('carServiceFactory', function () {
  'use strict';
  var carServiceFactory,

    $httpBackend,
    $rootScope;
  var edmondsUrl = 'https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=jzu8gwx7pnex9pz3qe8kzjrh';
  // console.log(cars)
  beforeEach(module('app.homePage'));
  beforeEach(inject(function (_carServiceFactory_, _$httpBackend_, _$rootScope_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    carServiceFactory = _carServiceFactory_;

    $httpBackend.when('GET', edmondsUrl).respond(edmondsUrl);
  }));

  it('should define factory carServiceFactory', function () {
    expect(carServiceFactory.getData).toBeDefined();
  });
  it('should return an inventory of cars', function () {
    var promise = carServiceFactory.getData();
    $httpBackend.flush();

    expect(promise.$$state.value).toEqual(edmondsUrl);
  });
  it('should return data when promise is resolved', function () {
    var promise = carServiceFactory.getData();
    var returnData;
    $httpBackend.flush();

    function cb (data) {
      returnData = data;
    }
    promise.then(cb);
    $rootScope.$digest();
    expect(returnData).toEqual(edmondsUrl);
  });
  it('should call http when to get inventory', function () {
    $httpBackend.expectGET(edmondsUrl);
    carServiceFactory.getData();
    $httpBackend.flush();
  });
});
