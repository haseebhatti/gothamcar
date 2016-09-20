(function () {
  'use strict';

  function transform (movie) {
    return {
      posterPath: movie.poster_path,
      overView: movie.overview
    };
  }
  function movieServiceFactory ($http) {
    function getDataFn () {
      return $http.get('http://api.themoviedb.org/3/discover/movie?api_key=613127419ba5df1a6dac21adb47c3df1&page=1')
        .then(function (response) {
          // console.log(response.data.results)
          return response.data.results;
        })
        .then(function (data) {
          return data.map(transform);
        });
    }
    return {
      getData: getDataFn
    };
  }
  angular.module('app.homePage', [])
    .factory('movieServiceFactory', movieServiceFactory);
}());
