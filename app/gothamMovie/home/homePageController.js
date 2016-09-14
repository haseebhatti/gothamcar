(function () {
  'use strict';
  function HomePageCtrl (appDetails, movieServiceFactory) {
    movieServiceFactory.getData().then(function (edmondsUrl) {
      // this.edmondsUrl = edmondsUrl
    });
    this.appDetails = appDetails;
  }

  angular.module('app.homePage')
    .controller('HomePageCtrl', HomePageCtrl)

    .constant('appDetails', {title: 'Gotham Movies', tagline: 'We have all kinds of movies'});
}());
