'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('HomeCtrl', function ($scope, Invite, $timeout, ErrorMessage, DivToaster, Book, Urls) {
    $scope.link = {
      text: Urls.getApiBaseUrl().replace('https','http') + '/book/1/quote/random'
    };

    $scope.randomQuote = Book.getRandomQuote({ book: 1 });

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

    $scope.new = function() {
      Book.save({ book: 1 }, // TODO: usar bookId de um select quando houver a funcionalidade
        $scope.newQuote,
        function() {
          DivToaster.toast('homeQuoteSave', 'success', 'Salvo');
          $scope.newQuote = {};
        },
        function (resp) {
          DivToaster.toast('homeQuoteSave', 'error', ErrorMessage.getByCode(resp.data.code));
          console.error('Error creating quote', resp);
        }
      );


    };

    $scope.newValid = function () {
      return $scope.newQuote && $scope.newQuote.phrase && $scope.newQuote.author;
    };


  });
