'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:ConfirmCtrl
 * @description
 * # ConfirmCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('ConfirmCtrl', function ($scope, $routeParams, User) {
    //$scope.confirmed = $routeParams.key === 'keyok';

    User.confirm({ confirmKey: $routeParams.key}, null,
      function() {
        $scope.confirmed = 'ok';
      },
      function() {
        $scope.confirmed = 'nok';
      }
    );


    console.log('controller ConfirmCtrl');
  });
