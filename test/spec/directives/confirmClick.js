'use strict';

describe('Directive: confirmClick', function () {

  // load the directive's module
  beforeEach(module('nhvioApp'));

  var element,
    scope,
    clicked,
    confirmed;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    clicked = false;
    confirmed = false;
    scope.exampleClick = function() {
      clicked = true;
    }
  }));

  it('should make hidden element visible', inject(function ($compile, $window) {
    element = angular.element('<a data-ng-click="exampleClick()" data-confirm-click="Delete this user?">Delete</a>');
    element = $compile(element)(scope);
    //scope.$digest();

    spyOn($window, 'confirm').andCallFake(function() {
      confirmed = true;
      return true;
    });

    element.click();
    expect(clicked).toBe(true);
    expect(confirmed).toBe(true);
  }));
});
