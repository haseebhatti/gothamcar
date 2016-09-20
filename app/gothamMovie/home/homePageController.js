(function () {
  'use strict';
  function HomePageCtrl (appDetails, movieServiceFactory) {
    var vm = this;
    movieServiceFactory.getData().then(function (data) {
      vm.movies = data;

    // this.edmondsUrl = edmondsUrl
    });
    this.appDetails = appDetails;
  }

  angular.module('app.homePage')
    .controller('HomePageCtrl', HomePageCtrl)

    .constant('appDetails', {title: 'Gotham Movies', tagline: 'We have all kinds of movies'});
}());
