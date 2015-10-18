'use strict';

/**
 * @ngdoc service
 * @name quotesWebApp.Book
 * @description
 * # Book
 * Service in the quotesWebApp.
 */
angular.module('quotesWebApp')
  .service('Book', function ($resource, Urls) {
    return $resource(Urls.getApiBaseUrl() + '/book/:book/quote/:quote',
    {
      book: '@book',
      quote: '@quote'
    },{
        getRandomQuote: {url: Urls.getApiBaseUrl() + '/book/:book/quote/random', method: 'GET'}
      });
  });
