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

    $scope.deleteQuote = function (id) {
      Book.delete({ book: $routeParams.id, quote: id },
        function() {
          DivToaster.toast('bookQuoteSave', 'success', 'Removido');
          updateQuotes();
        },
        function (resp) {
          DivToaster.toast('bookQuoteSave', 'error', ErrorMessage.getByCode(resp.data.code));
          console.error('Error deleting quote', resp);
        });
    };


  });
