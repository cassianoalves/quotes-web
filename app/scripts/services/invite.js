'use strict';

/**
 * @ngdoc service
 * @name quotesWebApp.Invite
 * @description
 * # Invite
 * Service in the quotesWebApp.
 */
angular.module('quotesWebApp')
  .service('Invite', function ($resource, Urls) {
    return $resource(Urls.getApiBaseUrl() + '/invite/:key',
      { key: '@key'},{});
  });
