(function () {
  'use strict';
  function SelectedCarsCtrl (SelectedCarsFactory) {
    this.display = '';
    this.cart = SelectedCarsFactory.getKart();
    this.buy = function (car) {
      this.display = SelectedCarsFactory.buy(car);
    };
  }
  function myCtrl2 (carService, SelectedCarsFactory) {
    this.allproducts = carService.getCars();
    this.addToKart = function (car) {
      SelectedCarsFactory.addToKart(car);
    };
  }
  angular.module('app.checkout')
    .controller('SelectedCarsCtrl', SelectedCarsCtrl)
    .controller('myCtrl2', myCtrl2);
}());
