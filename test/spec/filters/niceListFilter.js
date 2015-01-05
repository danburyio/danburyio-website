'use strict';

describe('Filter: niceListFilter', function () {

  // load the filter's module
  beforeEach(module('nhvioApp'));

  // initialize a new instance of the filter before each test
  var niceListFilter;
  beforeEach(inject(function ($filter) {
    niceListFilter = $filter('niceList');
  }));

  it('should return the input as a grammatically-correct list"', function () {
    var naughtyList = ['apple','banana','cherry'];
    expect(niceListFilter(naughtyList)).toBe('apple, banana & cherry');
  });

});
