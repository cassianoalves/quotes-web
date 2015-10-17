'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('AccountCtrl', function ($scope, User) {
    $scope.user = User.logged();

    $scope.validForm = function(){
      return ($scope.user.name &&
      $scope.user.email &&
      (
        ($scope.user.currentPassword && !$scope.user.password && !$scope.passwordConfirm) ||
        ($scope.user.currentPassword &&  $scope.user.password &&  $scope.user.password === $scope.passwordConfirm))
      );
    };

    $scope.update = function() {
      $scope.senting = true;
      $scope.user.$save(
        function() {
          $scope.sent = true;
          $scope.senting = false;
        },
        function(data) {
          console.error('Error updating user', data);
        }
      );
    };

  });
