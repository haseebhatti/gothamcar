(function () {
  'use strict';

  require('./gothamCar/checkout/checkout.config.js');
  require('./gothamCar/home/home.config.js');
  require('./gothamCar/infiniteScroll/infiniteScroll.config.js');
  require('./gothamCar/routingStuff/routingStuff.config.js');

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
