(function () {
  'use strict';

  require('./gothamMovie/checkout/checkout.config.js');
  require('./gothamMovie/home/home.config.js');
  require('./gothamMovie/infiniteScroll/infiniteScroll.config.js');
  require('./gothamMovie/routingStuff/routingStuff.config.js');

  function edmundsInterceptor () {
    return {
      request: function (config) {
        config.url += '?fmt=json&api_key=jzu8gwx7pnex9pz3qe8kzjrh';
      }
    };
  }
  angular.module('app', ['app.checkout', 'app.homePage', 'app.routing', 'app.infiniteScroll'])
    .factory('edmundsInterceptor', edmundsInterceptor)
    .config(function ($httpProvider) {
      //  $httpProvider.interceptors.push('edmundsInterceptor')
    });
})();
