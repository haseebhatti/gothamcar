describe('movieServiceFactory', function () {
  'use strict';
  var movieServiceFactory,
    $httpBackend,
    $rootScope;
  var movieUrl = 'http://api.themoviedb.org/3/discover/movie?api_key=613127419ba5df1a6dac21adb47c3df1&page=1';
  // console.log(movies)
  beforeEach(module('app.homePage'));
  beforeEach(inject(function (_movieServiceFactory_, _$httpBackend_, _$rootScope_) {
    $httpBackend = _$httpBackend_;
    $rootScope = _$rootScope_;
    movieServiceFactory = _movieServiceFactory_;

    $httpBackend.when('GET', movieUrl).respond(mockResult);
  }));

  it('should define factory movieServiceFactory', function () {
    expect(movieServiceFactory.getData).toBeDefined();
  });
  it('should return an inventory of movies', function () {
    var promise = movieServiceFactory.getData();
    $httpBackend.flush();

    expect(promise.$$state.value).toEqual([{ posterPath: '/5N20rQURev5CNDcMjHVUZhpoCNC.jpg', overView: 'this works' }]);
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
    expect(returnData).toEqual([{ posterPath: '/5N20rQURev5CNDcMjHVUZhpoCNC.jpg', overView: 'this works' }]);
  });
  it('should call http when to get inventory', function () {
    $httpBackend.expectGET(movieUrl);
    movieServiceFactory.getData();
    $httpBackend.flush();
  });
  var mockResult = {'page': 1,'results': [ {
      'poster_path': '\/5N20rQURev5CNDcMjHVUZhpoCNC.jpg',
      'adult': false,
      'overview': 'this works',
      'release_date': '2016-04-27',
      'genre_ids': [
        28,
        53,
        878
      ],
      'id': 271110,
      'original_title': 'Captain America: Civil War',
      'original_language': 'en',
      'title': 'Captain America: Civil War',
      'backdrop_path': '\/rqAHkvXldb9tHlnbQDwOzRi0yVD.jpg',
      'popularity': 39.757183,
      'vote_count': 2855,
      'video': false,
      'vote_average': 6.9
  }]};
});
