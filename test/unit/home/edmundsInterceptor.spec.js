describe('edmunds Interceptor', function () {
  'use strict';
  var movieInterceptor,url = 'myHost:8000';
  beforeEach(module('app'));
  beforeEach(inject(function (_movieInterceptor_) {
    movieInterceptor = _movieInterceptor_;
  }));

  it('should add params to the url', function () {
    var config = {
      url: url
    };
    movieInterceptor.request(config);
    expect(config.url).toEqual(url + '?api_key=613127419ba5df1a6dac21adb47c3df1&page=1');
  });
});
