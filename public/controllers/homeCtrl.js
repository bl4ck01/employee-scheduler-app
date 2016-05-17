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
    "User",
    "Schedule"
  ];
  function homeCtrl(
    $state, 
    $http, 
    $scope, 
    $stamplay,
    User,
    Schedule
    )
  {

//ON PAGE LOAD, GET EMPLOYEES & SCHEDULE DATA
    Schedule.getScheduleData().then(function(res){
      $scope.schedule = res.data;
    });

//GO TO SCHEDULE TAB AND DISPLAY DATA
    $scope.scheduleTab = function() {
      document.getElementById('scheduleTab').className = "is-active";
      document.getElementById('viewTab').className = "none";
      document.getElementById('employeesTab').className = "none";
      
    };

    $scope.viewTab = function() {
      document.getElementById('viewTab').className = "is-active";
      document.getElementById('scheduleTab').className = "none";
      document.getElementById('employeesTab').className = "none";
    };

    $scope.employeesTab = function() {
      document.getElementById('employeesTab').className = "is-active";
      document.getElementById('viewTab').className = "none";
      document.getElementById('scheduleTab').className = "none";
    };

  }
  })();