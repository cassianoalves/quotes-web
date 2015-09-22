'use strict';

describe('Controller: QuoteCtrl', function () {

  // load the controller's module
  beforeEach(module('quotesWebApp'));

  var QuoteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuoteCtrl = $controller('QuoteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(QuoteCtrl.awesomeThings.length).toBe(3);
  //});
});
