'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('LoginCtrl', function ($scope, Auth, $routeParams, $location) {
    $scope.params = $routeParams;

    if($scope.params.logout) {
      Auth.doLogout();
    }

    $scope.go = function() {
      console.log('$scope.rememberMe', $scope.rememberMe);
      Auth.doLogin($scope.username, $scope.password, $scope.rememberMe).then(
      function(a,b,c) {
        console.log('login ok', a,b,c);
        $location.path("#/").search('');
      },
      function(a,b,c) {
        console.log('invalid', a,b,c);
        $location.path("/login").search('invalidcredentials');
      });
    };
  });
