'use strict';

describe('Controller: ProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('nhvioApp'));

  var ProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();

    $httpBackend.expect('GET', '/api/users/me')
    .respond({
    });

    ProfileCtrl = $controller('ProfileCtrl', {
      $scope: scope
    });
  }));

  it('should add user to the scope', function () {
    expect(scope.user).toBeDefined();
    expect(scope.userComp).toBeDefined();
  });
});
