angular.module('app')

  .controller('examplesController', ['$rootScope', '$scope', '$timeout', '$location', function($rootScope, $scope, $timeout, $location) {

    $scope.person = {
      firstName: 'Johnny',
      lastName: 'Carson'
    }

  }]);