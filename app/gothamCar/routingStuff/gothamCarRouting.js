(function () {
  'use strict';
  angular.module('app.routing', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('cart', {
          url: '/cart',
          templateUrl: 'checkout.tpl.html',
          controller: 'SelectedCarsCtrl'
        })
        .state('cars', {
          url: '/cars',
          templateUrl: 'checkout.tpl.html'
        });

      $urlRouterProvider.otherwise('/cars');
    });
}());
