'use strict';

describe('Service: urls', function () {

  // load the service's module
  beforeEach(module('quotesWebApp'));

  // instantiate service
  var Urls;
  beforeEach(inject(function (_Urls_) {
    Urls = _Urls_;
  }));

  it('should do something', function () {
    expect(!!Urls).toBe(true);
  });

});
