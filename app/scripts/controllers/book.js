'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:QuoteCtrl
 * @description
 * # QuoteCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('BookCtrl', function ($scope, $routeParams, Book, DivToaster, ErrorMessage) {
    console.log('Quote ID', $routeParams.id);

    $scope.quotes = [
      {
        phrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        author: 'Anonymous'
      },
      {
        phrase: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
        author: 'Cicero'
      }
    ];

    function updateQuotes() {
      $scope.quotes = Book.query({ book: $routeParams.id });
    }

    updateQuotes();

    $scope.new = function() {
      Book.save({ book: $routeParams.id },
        $scope.newQuote,
        function() {
          DivToaster.toast('bookQuoteSave', 'success', 'Salvo');
          updateQuotes();
          $scope.newQuote = {};
        },
        function (resp) {
          DivToaster.toast('bookQuoteSave', 'error', ErrorMessage.getByCode(resp.data.code));
          console.error('Error creating quote', resp);
        }
      );


    };

    $scope.newValid = function () {
      return $scope.newQuote && $scope.newQuote.phrase && $scope.newQuote.author;
    };


  });
