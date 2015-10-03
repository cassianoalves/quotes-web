'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('SignupCtrl', function ($scope, $location, $routeParams, Urls, Invite, User) {

    $scope.sent = false;

    // Por enquanto só para convidados
    if($routeParams.invite) {
      Invite.get({ key: $routeParams.invite },
        function (invite) {
          $scope.invite = invite;
          $scope.email = $scope.invite.guestEmail;
        },
        function (response) {
          console.log(response);
          $location.path('subscribe').search({ signup: 'invalidInvite'});
        }
      );
    } else {
      $location.path('subscribe');
    }


    $scope.signUp = function() {
      console.log('signup', $scope.email);

      var newUser = new User({
        email: $scope.email,
        name: $scope.name,
        password: $scope.password,
        passwordConfirm: $scope.passwordConfirm
      });

      newUser.$save(
        function() {
          $scope.sent=true;
        },
        function (r) {
          console.log('Error', r);
          $location.path('error');
        }
      );

    };

  });
