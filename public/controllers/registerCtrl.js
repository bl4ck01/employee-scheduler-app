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
      User.Register(employee).then(function(user){
        $state.go('Home');
      });
    };

//ADMIN SIGNUP
    var key;
    $scope.signupAdmin = function(admin) {
      key = admin.key;
      User.Register(admin).then(function(user){
        User.assignRole(user.id, key).then(function(){
          $state.go('Home');
        });
      });
    };


  }
  })();