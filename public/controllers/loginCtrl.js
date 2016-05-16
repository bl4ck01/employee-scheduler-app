//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('loginCtrl', loginCtrl);
  loginCtrl.$inject = [
    '$state',
    "$http",
    "$scope", 
    "$stamplay",
    "Schedule"
  ];
  function loginCtrl(
    $state, 
    $http, 
    $scope, 
    $stamplay,
    Schedule
    )
  {

    $scope.hello = "helloWorld";

  }
  })();