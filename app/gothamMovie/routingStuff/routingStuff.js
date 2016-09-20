(function () {
  'use strict';
  angular.module('app.routing', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('checkout', {
          url: '/checkout',
          templateUrl: 'gothamMovie/checkout/checkout.tpl.html',
          controller: 'SelectedmoviesCtrl'
        })
        .state('movies', {
          url: '/movies',
          templateUrl: 'gothamMovie/home/homePage.tpl.html'
        });

      $urlRouterProvider.otherwise('/movies');
    });
}());
