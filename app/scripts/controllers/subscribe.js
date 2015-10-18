'use strict';

/**
 * @ngdoc function
 * @name quotesWebApp.controller:SubscribeCtrl
 * @description
 * # SubscribeCtrl
 * Controller of the quotesWebApp
 */
angular.module('quotesWebApp')
  .controller('SubscribeCtrl', function ($scope, DivToaster) {
    $scope.t1 = function (type) {
      DivToaster.toast('toast1',type, 'Mensagem');
    };

    $scope.t2 = function (type) {
      DivToaster.toast('toast2',type, 'Mensagem 2');
    };
  });
