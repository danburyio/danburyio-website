'use strict';

describe('Controller: UsersCtrl', function () {

  // load the controller's module
  beforeEach(module('nhvioApp'));

  var UsersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();

    $httpBackend.expect('GET', '/api/users')
      .respond([{},{},{}]);

    UsersCtrl = $controller('UsersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of users to the scope', function () {
    expect(scope.users.length).toBe(3);
  });
});
