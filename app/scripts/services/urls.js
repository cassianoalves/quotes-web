'use strict';

/**
 * @ngdoc service
 * @name quotesWebApp.urls
 * @description
 * # urls
 * Service in the quotesWebApp.
 */
angular.module('quotesWebApp')
  .service('Urls', function () {
    return {
      getRssUrl: function (quoteName) {
        return 'http://www.thequotes.com/rss/' + (quoteName ? quoteName : '<quoute-name>');
      },
      getApiBaseUrl: function() {
        // No Heroku precisa configurar o ambiente com o comando:
        // heroku config:set API_BASE_URL="<url base da API>"
        var envBaseUrl = process.env.API_BASE_URL;
        if(envBaseUrl) {
          return envBaseUrl;
        }
        return 'http://localhost:8080';
        //return '';
      }
    };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
