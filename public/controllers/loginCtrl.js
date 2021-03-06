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
    "User"
  ];
  function loginCtrl(
    $state, 
    $http, 
    $scope, 
    $stamplay,
    User
    )
  {

    $scope.login = function(user) {
      User.signIn(user).then(function(){
        $state.go('Home');
      });
    };

  }
  })();