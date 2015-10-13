'use strict';

describe('Service: ErrorMessage', function () {

  // load the service's module
  beforeEach(module('quotesWebApp'));

  // instantiate service
  var ErrorMessage;
  beforeEach(inject(function (_ErrorMessage_) {
    ErrorMessage = _ErrorMessage_;
  }));

  it('should do something', function () {
    expect(!!ErrorMessage).toBe(true);
  });

});
