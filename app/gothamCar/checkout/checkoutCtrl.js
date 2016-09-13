(function () {
  'use strict';
  function SelectedCarsCtrl (SelectedCarsFactory) {
    this.display = '';
    this.cart = SelectedCarsFactory.getKart();
    this.buy = function (car) {
      this.display = SelectedCarsFactory.buy(car);
    };
  }

  angular.module('app.checkout')
    .controller('SelectedCarsCtrl', SelectedCarsCtrl);
}());
