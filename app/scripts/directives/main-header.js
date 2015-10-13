'use strict';

/**
 * @ngdoc directive
 * @name quotesWebApp.directive:mainHeader
 * @description
 * # mainHeader
 */
angular.module('quotesWebApp')
  .directive('mainHeader', function () {
    return {
      templateUrl: 'views/partials/main-header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.center=(attrs.center !== undefined);
      },
      controller: function($scope, Session) {
        $scope.session = Session.get();
      }
    };
  });
