angular.module('app').directive('fullName', function () {
  return {
    restrict: 'E',
    scope: {
      person: '='
    },
    template: '<span>{{person.firstName}} {{person.lastName}}</span>'
  };
});