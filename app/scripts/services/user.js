'use strict';

/**
 * @ngdoc service
 * @name quotesWebApp.User
 * @description
 * # User
 * Service in the quotesWebApp.
 */
angular.module('quotesWebApp')
  .service('User', function ($resource, Urls) {
    return $resource(Urls.getApiBaseUrl() + '/user/:id',
      {
        id: '@id',
        confirmKey: '@confirmKey'
      },{
        confirm: {url: Urls.getApiBaseUrl() + '/user/confirm/:confirmKey', method: 'POST'},
        logged: {url: Urls.getApiBaseUrl() + '/user/logged', method: 'GET'}
      });
  });
