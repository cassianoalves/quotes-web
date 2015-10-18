'use strict';

describe('Service: DivToaster', function () {

  // load the service's module
  beforeEach(module('quotesWebApp'));

  // instantiate service
  var DivToaster;
  beforeEach(inject(function (_DivToaster_) {
    DivToaster = _DivToaster_;
  }));

  it('should do something', function () {
    expect(!!DivToaster).toBe(true);
  });

});
