'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:AccountCtrl
 * @description
 * # AccountCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('AccountCtrl', function ($scope, User, DivToaster, ErrorMessage) {
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
      $scope.sending = true;
      $scope.user.$save(
        function() {
          $scope.sending = false;
          DivToaster.toast('accountSubmit', 'success', 'Atualizado');
        },
        function(resp) {
          DivToaster.toast('accountSubmit', 'error', ErrorMessage.getByCode(resp.data.code));
          console.error('Error updating user', resp);
          $scope.sending = false;
        }
      );
    };

  });
