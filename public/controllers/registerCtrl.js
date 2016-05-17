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
      var employeeInfo = {
        name: employee.name,
        email: employee.email,
        password: employee.password,
        monday: "off",
        tuesday: "off",
        wednesday: "off",
        thursday: "off",
        friday: "off",
        saturday: "off",
        sunday: "off"
      };

      User.Register(employeeInfo).then(function(user){
        $state.go('Home');
      });
    };

//ADMIN SIGNUP
    $scope.signupAdmin = function(admin) {
      var key = admin.key;
      var adminInfo = {
        name: admin.name,
        email: admin.email,
        password: admin.password,
        monday: "off",
        tuesday: "off",
        wednesday: "off",
        thursday: "off",
        friday: "off",
        saturday: "off",
        sunday: "off"
      };

      User.Register(adminInfo).then(function(user){
        User.assignRole(user.id, key).then(function(){
          $state.go('Home');
        });
      });
    };


  }
  })();