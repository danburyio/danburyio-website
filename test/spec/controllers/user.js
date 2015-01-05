'use strict';

describe('Controller: UserCtrl', function () {

  // load the controller's module
  beforeEach(module('nhvioApp'));

  var UserCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();

    $httpBackend.expect('GET', "/api/users/1234")
      .respond({});

    UserCtrl = $controller('UserCtrl', {
      $scope: scope,
      $routeParams: { developerId: "1234" }
    });
  }));

  it('should attach a user to the scope', function () {
    expect(scope.user).toBeDefined();
  });
});
