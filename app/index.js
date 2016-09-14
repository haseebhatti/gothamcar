(function (root) {
  'use strict';
  require('angular');
  require('angular-ui-router');
  require('angular-mocks');
  require('ng-infinite-scroll');

  root.jQuery = root.jQuery || require('jquery');
  require('bootstrap');
  require('./app');
}(window));
