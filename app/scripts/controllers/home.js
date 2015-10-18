'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('HomeCtrl', function ($scope, Invite, $timeout, ErrorMessage, DivToaster) {

    $scope.quoteOfTheDay =  {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      author: 'Anonymous'
    };

    $scope.sendingInvite = false;
    $scope.sendInvite = function() {
      $scope.sendingInvite = true;
      var invite = new Invite();
      invite.guestEmail = $scope.inviteEmail;
      invite.$save(
        function(){
          $scope.sendingInvite = false;
          $scope.inviteEmail = null;
          DivToaster.toast('homeFriendInvite', 'success', 'Enviado');
        },
        function(resp) {
          console.log('Error sending invite', resp);
          $scope.sendingInvite = false;
          if(resp.data && resp.data.code) {
            DivToaster.toast('homeFriendInvite', 'error', ErrorMessage.getByCode(resp.data.code));
          }
        }
      );
    };
  });
