'use strict';

/**
 * @ngdoc service
 * @name quotesWebApp.Contact
 * @description
 * # Contact
 * Service in the quotesWebApp.
 */
angular.module('quotesWebApp')
  .service('Contact', function ($resource, Urls) {
    return $resource(Urls.getApiBaseUrl() + '/contact',
      {},{
        mailme: {url: Urls.getApiBaseUrl() + '/contact/mailme', method: 'POST'}
      });
  });

