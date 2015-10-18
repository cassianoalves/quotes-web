'use strict';

/**
 * @ngdoc service
 * @name quotesWebApp.DivToaster
 * @description
 * # DivToaster
 * Service in the quotesWebApp.
 */
angular.module('quotesWebApp')
  .service('DivToaster', function ($rootScope) {
    this.toast = function (id, type, message) {
      $rootScope.$broadcast('DivToasterCall', {id: id, type: type, message: message});
    };
  });
