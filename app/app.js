(function () {
  'use strict';

  require('./gothamMovie/checkout/checkout.config.js');
  require('./gothamMovie/home/home.config.js');
  require('./gothamMovie/infiniteScroll/infiniteScroll.config.js');
  require('./gothamMovie/routingStuff/routingStuff.config.js');

  function movieInterceptor () {
    return {
      request: function (config) {
        config.url += '?api_key=613127419ba5df1a6dac21adb47c3df1&page=1';
      }
    };
  }
  angular.module('app', ['app.checkout', 'app.homePage', 'app.routing', 'app.infiniteScroll', 'app.movieDisplay'])
    .factory('movieInterceptor', movieInterceptor)
    .config(function ($httpProvider) {
      //  $httpProvider.interceptors.push('edmundsInterceptor')
    });
})();
