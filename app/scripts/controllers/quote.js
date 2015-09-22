'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:QuoteCtrl
 * @description
 * # QuoteCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('QuoteCtrl', function ($scope) {

    $scope.quoteObj = {
      id: 1,
      name: 'My quote 1',
      owner: 'me',
      private: false
    };

    $scope.quotes = [
      {
        quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        author: 'Anonymous'
      },
      {
        quote: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        author: 'Cicero'
      }
    ];

    $scope.new = function() {
      $scope.quotes.push({});
    };

  });
