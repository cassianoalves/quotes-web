'use strict';

/**
 * @ngdoc overview
 * @name quotesWebApp
 * @description
 * # quotesWebApp
 *
 * Main module of the application.
 */
angular
  .module('quotesWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'config'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'signup'
      })
      .when('/error', {
        templateUrl: 'views/error.html'
      })
      .when('/quote-list/:userId', {
        templateUrl: 'views/quote-list.html',
        controller: 'QuoteListCtrl',
        controllerAs: 'quoteList'
      })
      .when('/quote/:id', {
        templateUrl: 'views/quote.html',
        controller: 'QuoteCtrl',
        controllerAs: 'quote'
      })
      .when('/confirm/:key', {
        templateUrl: 'views/confirm.html',
        controller: 'ConfirmCtrl',
        controllerAs: 'confirm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
