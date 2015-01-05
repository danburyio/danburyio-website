'use strict';

describe('Service: LanguageService', function () {

  // load the service's module
  beforeEach(module('nhvioApp'));

  // instantiate service
  var LanguageService;
  beforeEach(inject(function (_LanguageService_) {
    LanguageService = _LanguageService_;
  }));

  it('should create the LanguageService', function () {
    expect(!!LanguageService).toBe(true);
  });

});
