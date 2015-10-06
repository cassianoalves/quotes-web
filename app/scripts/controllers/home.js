'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('HomeCtrl', function ($scope, Invite, $timeout) {
    $scope.session = {
      userId: 123,
      userName: 'John Smith'
    };

    $scope.quoteOfTheDay =  {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      author: 'Anonymous'
    };

    function blink(scopeVar) {
      $scope[scopeVar] = true;
      $timeout(function () {
        $scope[scopeVar] = false;
      }, 3000);
    }

    $scope.sendingInvite = false;
    $scope.sendInvite = function() {
      $scope.sendingInvite = true;
      var invite = new Invite();
      invite.guestEmail = $scope.inviteEmail;
      invite.$save(
        function(){
          $scope.sendingInvite = false;
          $scope.inviteEmail = null;
          blink('sentAlert');
        },
        function(resp) {
          console.log('Error sending invite', resp);
          $scope.sendingInvite = false;
        }
      );
    };
  });
