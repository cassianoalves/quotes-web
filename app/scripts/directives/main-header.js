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
      //link: function postLink(scope, element, attrs) {
      //  element.text('this is the mainHeader directive');
      //}
    };
  });
