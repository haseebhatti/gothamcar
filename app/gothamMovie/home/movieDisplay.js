(function () {
  angular.module('app.movieDisplay', [])
    .directive('movieDisplay', function () {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: 'gothamMovie/home/homePage.tpl.html',
        scope: {
          movie: '@'
        }
      };
    });
})();
