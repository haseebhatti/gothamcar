(function () {
  'use strict';
  angular.module('app.routing', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('cart', {
          url: '/cart',
          templateUrl: 'checkout.html',
          controller: 'SelectedCarsCtrl'
        })
        .state('cars', {
          url: '/cars',
          templateUrl: 'index.html'
        })

      $urlRouterProvider.otherwise('/cars');
    });
}());
