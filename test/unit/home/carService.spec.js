describe('movieServiceFactory', function () {
  'use strict';
  var movieServiceFactory,

    $httpBackend,
    $rootScope;
  var edmondsUrl = 'https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=jzu8gwx7pnex9pz3qe8kzjrh';
  // console.log(movies)
  beforeEach(module('app.homePage'));
  beforeEach(inject(function (_movieServiceFactory_, _$httpBackend_, _$rootScope_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    movieServiceFactory = _movieServiceFactory_;

    $httpBackend.when('GET', edmondsUrl).respond(edmondsUrl);
  }));

  it('should define factory movieServiceFactory', function () {
    expect(movieServiceFactory.getData).toBeDefined();
  });
  it('should return an inventory of movies', function () {
    var promise = movieServiceFactory.getData();
    $httpBackend.flush();

    expect(promise.$$state.value).toEqual(edmondsUrl);
  });
  it('should return data when promise is resolved', function () {
    var promise = movieServiceFactory.getData();
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
    movieServiceFactory.getData();
    $httpBackend.flush();
  });
});
