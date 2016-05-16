//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('homeCtrl', homeCtrl);
  homeCtrl.$inject = [
    '$state',
    "$http",
    "$scope", 
    "$stamplay",
    "User"
  ];
  function homeCtrl(
    $state, 
    $http, 
    $scope, 
    $stamplay,
    User
    )
  {



  }
  })();