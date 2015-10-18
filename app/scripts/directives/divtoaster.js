'use strict';

/**
 * @ngdoc directive
 * @name quotesWebApp.directive:DivToaster
 * @description
 * # DivToaster
 */
angular.module('quotesWebApp')
  .directive('divToaster', function ($timeout) {
    return {
      template: '<div ng-show="show">' +
      '<div ng-show="type === \'success\'" class="text-success">{{ message }} <span class="glyphicon glyphicon-ok" aria-hidden="true"></span></div>' +
      '<div ng-show="type === \'error\'" class="text-danger">{{ message }} <span class="glyphicon glyphicon-remove" aria-hidden="true"></span></div>' +
      '</div>',
      restrict: 'E',
      scope: {}, // Para ter o próprio scope
      link: function postLink(scope, element, attrs) {
        //element.text('this is the DivToaster directive');
        scope.show = false;
        function blink() {
          scope.show = true;
          $timeout(function () {
            scope.show = false;
          }, 3000);
        }

        scope.$on('DivToasterCall', function(event, toast){
          if(attrs.id && toast.id && attrs.id === toast.id) {
            console.log('Recebeu evento', toast);
            scope.message = toast.message;
            scope.type = toast.type;
            blink();
          }
        });
      }
    };
  });
