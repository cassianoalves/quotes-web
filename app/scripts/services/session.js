'use strict';

/**
 * @ngdoc service
 * @name quotesWebApp.Session
 * @description
 * # Session
 * Service in the quotesWebApp.
 */
angular.module('quotesWebApp')
  .service('Sessionxxx', function (Auth) {
    this.session = null;
    this.save = function(user) {
      console.log(user);
        this.session.user = user;
    };
    this.get = function() {
      if(!this.session) {
        Auth.checkAuth().then(function(result) {
          this.save(result.data);
        });
      }
      return this.session;
    };
    return this;
  });
