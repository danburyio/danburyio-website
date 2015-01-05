'use strict';

describe('Controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('nhvioApp'));

  var MenuCtrl,
    scope,
    httpBackend,
    controller;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();
    controller = $controller;
    httpBackend = $httpBackend;

    httpBackend.expect('GET', '/api/users/me')
    .respond({
    });
    MenuCtrl = $controller('MenuCtrl', {
      $scope: scope
    });
  }));

  it('should add the current user to the scope', function () {
    expect(scope.me).toBeDefined();
  });
});
