'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:QuoteListCtrl
 * @description
 * # QuoteListCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('QuoteListCtrl', function ($scope) {
    $scope.userQuotes = [
      {
        id: 1,
        name: 'My quote 1',
        owner: 'me',
        private: false
      },
      {
        id: 2,
        name: 'My quote 2',
        owner: 'me',
        private: true
      },
      {
        id: 3,
        name: 'My friend quote',
        owner: 'My friend',
        private: false
      },
      {
        id: 4,
        name: 'Other friend quote',
        owner: 'Another friend',
        private: false
      },
      {
        id: 5,
        name: 'Other friend quote',
        owner: 'Another friend',
        private: false
      }
    ];
  });
