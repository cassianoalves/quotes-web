'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:RandomCtrl
 * @description
 * # RandomCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('RandomCtrl', function ($scope, $routeParams, Book, $timeout) {
    var delay = 60;
    if($routeParams.delay) {
      delay = Number($routeParams.delay);
    }
    function updateQuote() {
      $scope.randomQuote = Book.getRandomQuote({ book: $routeParams.id });
      $timeout(updateQuote, delay * 1000);
    }
    updateQuote();
  });
