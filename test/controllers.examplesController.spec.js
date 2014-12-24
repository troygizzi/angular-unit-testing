'use strict';

describe('controller: examplesController', function() {

  var $rootScope, $scope, $controller;

  beforeEach(module('app'));

  beforeEach(inject(function(_$rootScope_, _$controller_){
    $rootScope = _$rootScope_;
    $scope = $rootScope.$new();
    $controller = _$controller_;

    $controller('examplesController', {'$rootScope' : $rootScope, '$scope': $scope});
  }));

  it('should contain a person model initially hard-coded to Johnny Carson', function() {
    expect($scope.person.firstName).toEqual('Johnny');
    expect($scope.person.lastName).toEqual('Carson');
  });
});