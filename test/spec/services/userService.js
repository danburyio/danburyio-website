'use strict';

describe('Service: UserService', function () {

  // load the service's module
  beforeEach(module('nhvioApp'));

  // instantiate service
  var userService;
  beforeEach(inject(function (_UserService_) {
    userService = _UserService_;
  }));

  it('should create a UserService', function () {
    expect(!!userService).toBe(true);
  });

});
