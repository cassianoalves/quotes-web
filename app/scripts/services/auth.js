'use strict';

/**
 * @ngdoc service
 * @name quotesWebApp.Auth
 * @description
 * # Auth
 * Service in the quotesWebApp.
 */
angular.module('quotesWebApp')
  .service('Auth', function ($http, Urls) {
    return {
      // Faz a chamada de login contando receber o cookie JSESSIONID
      doLogin: function(username, password) {
        return $http({
          method: 'POST',
          url: Urls.getApiBaseUrl() + '/login',
          //data: $.param({
          //  username: username,
          //  password: password
          //}),
          data: 'username=' + username + '&password=' + password,
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        });
      },

      // Cancela a sessão na api
      doLogout: function() {
        return $http({
          method: 'POST',
          url: Urls.getApiBaseUrl() + '/logout'
        });
      },

      // Faz a chamada de login contando receber o cookie JSESSIONID
      checkAuth: function() {
        return $http({
          method: 'GET',
          url: Urls.getApiBaseUrl() + '/checkauth'
        });
      }

    };
  });
