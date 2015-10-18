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
        //,requiresAuth: true
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
        //,requiresAuth: true
      })
      .when('/book/:id', {
        templateUrl: 'views/book.html',
        controller: 'BookCtrl',
        controllerAs: 'book'
        //,requiresAuth: true
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
      .when('/account', {
        templateUrl: 'views/account.html',
        controller: 'AccountCtrl',
        controllerAs: 'account'
        //,requiresAuth: true
      })
      .when('/random/:id', {
        templateUrl: 'views/random.html',
        controller: 'RandomCtrl',
        controllerAs: 'random'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  //.run(function($rootScope, Auth, Session) {
  //    // Verifica a sessão a cada mudanca de pagina
  //    $rootScope.$on('$routeChangeSuccess', function(event, next) {
  //      console.log('onRouteChange - next', next);
  //      if(next.$$route && next.$$route.requiresAuth) {
  //        Auth.checkAuth().then(function(result) {
  //          Session.save(result.data);
  //        });
  //      }
  //    });
  //  })
;
// Verifica as respostas das chamadas HTTP. Caso retorne 401, considera "sessao expirada" e direciona para o login
angular
  .module('quotesWebApp').factory('sessionChecker', function($q, $location) {
    return {
      'responseError': function(rejection) {
        console.log('sessionChecker', rejection.config ? rejection.config.url : 'config = null');
        if(rejection.config &&
          rejection.config.url.match(/\/login$/) === null &&
          rejection.status !== undefined && rejection.status === 401){
          $location.path('/login').search('');
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
    $httpProvider.defaults.withCredentials = true;
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    //Remove the header used to identify ajax call  that would prevent CORS from working
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

