'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.session = {
      userId: 123,
      userName: 'John Smith'
    };

    $scope.quoteOfTheDay =  {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      author: 'Anonymous'
    };
  });
