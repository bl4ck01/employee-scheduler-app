//CONTROLLER
(function() {
  'use strict';
  angular.module('stamplay')
  .controller('registerCtrl', registerCtrl);
  registerCtrl.$inject = [
    '$state',
    "$http",
    "$scope", 
    "$stamplay",
    "Schedule",
    "User"
  ];
  function registerCtrl(
    $state, 
    $http, 
    $scope, 
    $stamplay,
    Schedule,
    User
    )
  {

//NAVIGATE TO REGISTER VIEW
    $scope.goToRegister = function(user) {
      if(user === undefined){
        toastr.error('Please select a role');
      }
      else if(user.employee === true) {
        $state.go('RegisterEmployee');
      }
      else{
        $state.go('RegisterAdmin');
      }
    };

//EMPLOYEE SIGNUP
    $scope.signupEmployee = function(employee) {
      User.newEmployee(employee).then(function(user){
        console.log(user);
      });
    };



  }
  })();