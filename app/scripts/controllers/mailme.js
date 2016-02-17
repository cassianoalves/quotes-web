'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:MailmeCtrl
 * @description
 * # MailmeCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('MailmeCtrl', function ($scope, Contact, DivToaster, ErrorMessage, $location) {
    $scope.sending = false;

    $scope.contactMessage = {
      type: 'SUGESTION'
    };

    $scope.validForm = function() {
      return $scope.contactMessage.message && $scope.contactMessage.message.length > 5;
    };

    $scope.send = function() {
      $scope.sending = true;
      Contact.mailme($scope.contactMessage,
        function() {
          $scope.sending = false;
          DivToaster.toast('messageSubmit', 'success', 'Enviado',
            function(){
              $location.path('/').search('');
            });
        },
        function(resp) {
          DivToaster.toast('messageSubmit', 'error', ErrorMessage.getByCode(resp.data.code));
          console.error('Error updating user', resp);
          $scope.sending = false;
        }
      );
    };

  });
