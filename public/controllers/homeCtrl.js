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

    $scope.hideEditTab = true;
    var arr;
//ON PAGE LOAD, GET EMPLOYEES & SCHEDULE DATA
    Schedule.getScheduleData().then(function(res){
      $scope.schedule = res.data;
      $scope.employees = res.data;
      arr = res.data;

    });

//GO TO EDIT TAB
    $scope.editTab = function() {
      document.getElementById('scheduleTab').className = "is-active";
      document.getElementById('viewTab').className = "none";
      document.getElementById('employeesTab').className = "none";
      $scope.hideEditTab = false;
      $scope.hideViewTab = true;

    };

//GO TO VIEW TAB
    $scope.viewTab = function() {
      document.getElementById('viewTab').className = "is-active";
      document.getElementById('scheduleTab').className = "none";
      document.getElementById('employeesTab').className = "none";
      $scope.hideViewTab = false;
      $scope.hideEditTab = true;
    };

//GO TO EMPLOYEES TAB
    $scope.employeesTab = function() {
      document.getElementById('employeesTab').className = "is-active";
      document.getElementById('viewTab').className = "none";
      document.getElementById('scheduleTab').className = "none";
    };

//SAVE SCHEDULE
    
    var mon = "Off",
        tues = "Off", 
        wed = "Off",
        thurs = "Off",
        fri = "Off",
        sat = "Off",
        sun = "Off";

    $scope.save = function() {
      if($scope.monday === true) {        
        mon = $scope.monStart + $scope.monStartAMPM +"-"+$scope.monEnd + $scope.monEndAMPM;
      }
      if($scope.tuesday === true) {
        tues = $scope.tuesStart + $scope.tuesStartAMPM +"-"+$scope.tuesEnd + $scope.tuesEndAMPM;
      }
      if($scope.wednesday === true) {
        wed = $scope.wedStart + $scope.wedStartAMPM +"-"+$scope.wedEnd + $scope.wedEndAMPM;
      }
      if($scope.thursday === true) {
        thurs = $scope.thursStart + $scope.thursStartAMPM +"-"+$scope.thursEnd + $scope.thursEndAMPM;
      }
      if($scope.friday === true) {
        fri = $scope.friStart + $scope.friStartAMPM +"-"+$scope.friEnd + $scope.friEndAMPM;
      }
      if($scope.friday === true) {
        fri = $scope.friStart + $scope.friStartAMPM +"-"+$scope.friEnd + $scope.friEndAMPM;
      }
      if($scope.saturday === true) {
        sat = $scope.satStart + $scope.satStartAMPM +"-"+$scope.satEnd + $scope.satEndAMPM;
      }
      if($scope.sunday === true) {
        sun = $scope.sunStart + $scope.sunStartAMPM +"-"+$scope.sunEnd + $scope.sunEndAMPM;
      }

      var info = {
        id: "",
        name: $scope.employeeList,
        monday: mon,
        tuesday: tues,
        wednesday: wed,
        thursday: thurs,
        friday: fri,
        saturday: sat,
        sunday: sun
      };

      var data = [];

      for(var i = 0; i<arr.length; i++) {
        if(arr[i].name === info.name){
          data.push(arr[i].id);
        }
        info.id = data[0];
      }
      Schedule.update(info).then(function(res){
        console.log(res);
      });
    };

  }
  })();