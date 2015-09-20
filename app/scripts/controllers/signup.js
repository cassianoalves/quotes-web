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

      $scope.sent=true;

      User.save({
        email: $scope.email,
        password: $scope.password,
        passwordConfirm: $scope.passwordConfirm,
        quoteName: $scope.quoteName
      }, function() {
        $scope.sent=true;
      }, function () {
        $location.path('error');
      });

    }

  });
