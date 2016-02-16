'use strict';

/**
 * @ngdoc directive
 * @name quotesWebApp.directive:mainFooter
 * @description
 * # mainFooter
 */
angular.module('quotesWebApp')
  .directive('mainFooter', function () {
    return {
      templateUrl: 'views/partials/main-footer.html',
      restrict: 'E'
    };
  });
