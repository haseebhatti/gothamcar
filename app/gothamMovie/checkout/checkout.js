(function () {
  'use strict';

  function SelectedmoviesFactory () {
    var kart = [];
    return {
      getKart: function () {
        return kart;
      },
      addToKart: function (movie) {
        kart.push(movie);
      },
      buy: function (movie) {
        return 'Thanks for buying ' + movie.name;
      }
    };
  }
  angular.module('app.checkout', [])
    .factory('SelectedmoviesFactory', SelectedmoviesFactory);
}());
