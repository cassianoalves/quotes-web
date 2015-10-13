'use strict';

/**
 * @ngdoc service
 * @name quotesWebApp.Session
 * @description
 * # Session
 * Service in the quotesWebApp.
 */
angular.module('quotesWebApp')
  .service('Session', function () {
    this.session = { user: { name: '???'} };
    this.save = function(user) {
        this.session.user = user;
    };
    this.get = function() {
        return this.session;
    };
    return this;
  });
