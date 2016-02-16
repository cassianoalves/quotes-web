'use strict';

describe('Directive: mainFooter', function () {

  // load the directive's module
  beforeEach(module('quotesWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  //it('should make hidden element visible', inject(function ($compile) {
  //  element = angular.element('<main-footer></main-footer>');
  //  element = $compile(element)(scope);
  //  expect(element.text()).toBe('this is the mainFooter directive');
  //}));
});
