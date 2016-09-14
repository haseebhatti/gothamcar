(function () {
  'use strict';
  function SelectedmoviesCtrl (SelectedmoviesFactory) {
    this.display = '';
    this.moviet = SelectedmoviesFactory.getKart();
    this.buy = function (movie) {
      this.display = SelectedmoviesFactory.buy(movie);
    };
  }

  angular.module('app.checkout')
    .controller('SelectedmoviesCtrl', SelectedmoviesCtrl);
}());
