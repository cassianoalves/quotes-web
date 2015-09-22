'use strict';

describe('Controller: QuoteListCtrl', function () {

  // load the controller's module
  beforeEach(module('quotesWebApp'));

  var QuoteListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    QuoteListCtrl = $controller('QuoteListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  //it('should attach a list of awesomeThings to the scope', function () {
  //  expect(QuoteListCtrl.awesomeThings.length).toBe(3);
  //});
});
