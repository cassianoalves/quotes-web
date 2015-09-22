'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:SignupCtrl
 * @description
 * # SignupCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('SignupCtrl', function ($scope, $location, Urls, User) {
    $scope.sent = false;

    $scope.$watch('quoteName', function() {
      $scope.rssURL = Urls.getRssUrl($scope.quoteName);
    });

    $scope.signUp = function() {
      console.log('signup', $scope.quoteName);

      var newUser = new User({
        email: $scope.email,
        name: $scope.name,
        password: $scope.password,
        passwordConfirm: $scope.passwordConfirm,
        quoteName: $scope.quoteName
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
