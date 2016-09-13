describe('edmunds Interceptor', function () {
  'use strict';
  var edmundsInterceptor,url = 'myHost:8000';
  beforeEach(module('app'));
  beforeEach(inject(function (_edmundsInterceptor_) {
    edmundsInterceptor = _edmundsInterceptor_;
  }));

  it('should add params to the url', function () {
    var config = {
      url: url
    };
    edmundsInterceptor.request(config);
    expect(config.url).toEqual(url + '?fmt=json&api_key=jzu8gwx7pnex9pz3qe8kzjrh');
  });
});
