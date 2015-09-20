'use strict';

/**
 * @ngdoc service
 * @name quotesWebApp.urls
 * @description
 * # urls
 * Service in the quotesWebApp.
 */
angular.module('quotesWebApp')
  .service('Urls', function (ENV) {
    return {
      getRssUrl: function (quoteName) {
        return 'http://www.thequotes.com/rss/' + (quoteName ? quoteName : '<quoute-name>');
      },
      getApiBaseUrl: function() {
        return ENV.apiBaseURL;
      }
    };
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
