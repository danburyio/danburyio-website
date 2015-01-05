'use strict';

describe('Controller: CompanyEditCtrl', function () {

  // load the controller's module
  beforeEach(module('nhvioApp'));

  var CompanyEditCtrl,
    scope,
    httpBackend,
    controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    controller = $controller;

    httpBackend = $httpBackend;

    scope = $rootScope.$new();
  }));

  afterEach(function() {
    httpBackend.flush();
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });


  it('should create a new company', function () {
    httpBackend.expect('GET', '/api/users/me')
    .respond({
    });
    httpBackend.expect('GET', '/api/languages')
    .respond({
    });
    httpBackend.expect('GET', '/api/users')
    .respond({
    });

    CompanyEditCtrl = controller('CompanyEditCtrl', {
      $scope: scope
    });

    expect(scope.company.isNew).toBe(true);
  });

});
