'use strict';

describe('Controller: AdminCtrl', function () {

  // load the controller's module
  beforeEach(module('nhvioApp'));

  var AdminCtrl,
    scope,
    httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    httpBackend = $httpBackend;
    httpBackend.expect('GET', '/api/companies')
    .respond({
    });
    httpBackend.expect('GET', '/api/users')
    .respond({
    });
    httpBackend.expect('GET', '/api/users/me')
    .respond({
      'roles': ["admin"]
    });
    httpBackend.expect('GET', '/api/languages')
    .respond({
    });

    scope = $rootScope.$new();
    AdminCtrl = $controller('AdminCtrl', {
      $scope: scope
    });
  }));

  afterEach(function() {
      httpBackend.flush();
      httpBackend.verifyNoOutstandingExpectation();
      httpBackend.verifyNoOutstandingRequest();
  });

  it('should set the active tab to developers', function () {
    expect(scope.activeTab).toBe("developers");
  });
});
