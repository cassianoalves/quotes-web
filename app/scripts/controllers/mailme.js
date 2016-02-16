'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:MailmeCtrl
 * @description
 * # MailmeCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('MailmeCtrl', function ($scope, Contact) {
    $scope.contactMessage = {
      type: 'SUGESTION'
    };

    $scope.send = function() {
      Contact.mailme($scope.contactMessage);
    }

  });
