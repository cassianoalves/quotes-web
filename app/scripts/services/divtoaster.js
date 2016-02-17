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
    this.toast = function (id, type, message, callback) {
      $rootScope.$broadcast('DivToasterCall', {id: id, type: type, message: message});

      var unregisterEvent = $rootScope.$on('DivToasterEnd', function(event, toast){
        console.log('Recebeu evento DivToasterEnd', toast);
        if(callback && (typeof callback === 'function') && id && toast.id && (id === toast.id)) {
          callback(toast);
        }
        unregisterEvent();
      });

    };
  });
