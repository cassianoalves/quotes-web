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
    var keepRepeat = true;
    if($routeParams.delay) {
      delay = Number($routeParams.delay);
    }

    $scope.$on('$destroy', function () {
      keepRepeat = false;
    });

    function updateQuote() {
      $scope.randomQuote = Book.getRandomQuote({ book: $routeParams.id });
      if(keepRepeat) {
        $timeout(updateQuote, delay * 1000);
      }
    }
    updateQuote();
  });
