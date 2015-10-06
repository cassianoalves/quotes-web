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
      .when('/subscribe', {
        templateUrl: 'views/subscribe.html',
        controller: 'SubscribeCtrl',
        controllerAs: 'subscribe'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
// Verifica as respostas das chamadas HTTP. Caso retorne 401, considera "sessao expirada" e direciona para o login
angular
  .module('quotesWebApp').factory('sessionChecker', function($q, $location) {
    return {
      'responseError': function(rejection) {
        console.log('sessionChecker');
        if(rejection.config &&
          //rejection.config.url.match(/\/api\/login$/) === null &&
          rejection.status !== undefined && rejection.status === 403){
          $location.path('/login').search('sessionexpired');
        }
        return $q.reject(rejection);
      }
    };
  });

// Configuração global das chamadas ajax ($http)
angular
  .module('quotesWebApp').config(function($httpProvider) {
    // Registra interceptor das chamadas http para tratar expiração de sessão
    $httpProvider.interceptors.push('sessionChecker');
    //Todas as chamadas devem ser enviadas com credenciais (Cookie JSESSIONID)
    //$httpProvider.defaults.withCredentials = true;
    //Enable cross domain calls
    //$httpProvider.defaults.useXDomain = true;
    //Remove the header used to identify ajax call  that would prevent CORS from working
    //delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

