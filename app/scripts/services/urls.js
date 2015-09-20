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
        var envBaseUrl = '';
        if(envBaseUrl) {
          return envBaseUrl;
        }
        return 'http://localhost:8080';
        //return '';
      }
    };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
