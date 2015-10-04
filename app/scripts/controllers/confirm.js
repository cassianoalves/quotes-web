'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:ConfirmCtrl
 * @description
 * # ConfirmCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('ConfirmCtrl', function ($scope, $routeParams) {
    $scope.confirmed = $routeParams.key === 'keyok';



    console.log('controller ConfirmCtrl');
  });
