(function () {
  'use strict';
  angular.module('app.routing', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('cart', {
          url: '/cart',
          templateUrl: 'gothamCar/checkout/checkout.tpl.html',
          controller: 'SelectedCarsCtrl'
        })
        .state('cars', {
          url: '/cars',
          templateUrl: 'gothamCar/home/homePage.tpl.html'
        });

      $urlRouterProvider.otherwise('/cars');
    });
}());
