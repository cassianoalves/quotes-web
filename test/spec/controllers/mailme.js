'use strict';

describe('Controller: MailmeCtrl', function () {

  // load the controller's module
  beforeEach(module('quotesWebApp'));

  var MailmeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MailmeCtrl = $controller('MailmeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MailmeCtrl.awesomeThings.length).toBe(3);
  });
});
