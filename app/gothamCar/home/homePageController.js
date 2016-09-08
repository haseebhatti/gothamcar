(function () {
  'use strict';
  function HomePageCtrl (appDetails) {
    this.appDetails = appDetails;
  }
  angular.module('app.homePage')
    .controller('HomePageCtrl', HomePageCtrl)
    .constant('appDetails', {title: 'Gotham Car', tagline: 'We have all kinds of cars'});
}());
