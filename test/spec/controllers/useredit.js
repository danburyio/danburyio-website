'use strict';

describe('Controller: UserEditCtrl', function () {

  // load the controller's module
  beforeEach(module('nhvioApp'));

  var UserEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend) {
    scope = $rootScope.$new();


    $httpBackend.expect('GET', "/api/users/1234")
    .respond({
    });
    $httpBackend.expect('GET', "/api/companies")
    .respond([
    {
    }
    ]);
    $httpBackend.expect('GET', "/api/languages")
    .respond({
    });


    UserEditCtrl = $controller('UserEditCtrl', {
      $scope: scope,
      $routeParams: { developerId: "1234" }
    });
  }));

  it('should attach a user to the scope', function () {
    // TODO: Figure out how to look up scope.user once its been set by UserService.getUser()
    // TODO: Figure out how to look up scope.companies
    // TODO: Figure out how to look up scope.programmingLanguages
  });
});
