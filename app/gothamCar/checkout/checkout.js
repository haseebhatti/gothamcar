(function () {
  'use strict';

  function SelectedCarsFactory () {
    var kart = [];
    return {
      getKart: function () {
        return kart;
      },
      addToKart: function (car) {
        kart.push(car);
      },
      buy: function (car) {
        return 'Thanks for buying ' + car.name;
      }
    };
  }
  angular.module('app.checkout', [])
    .factory('SelectedCarsFactory', SelectedCarsFactory);
}());
