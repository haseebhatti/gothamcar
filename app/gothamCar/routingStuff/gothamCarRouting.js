(function () {
  'use strict';
  angular.module('app.routing', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('/cars', {
          templateUrl: 'app/car-list.html',
          controller: 'MyCtrl2'
        })
        .state('/cart', {
          templateUrl: 'app/car-list.html',
          controller: 'KartListCtrl'
        });

      $urlRouterProvider.otherwise('/cars');
    });
}());
