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
    $scope.hideEmployeesTab = true;
    var arr;
    $scope.option = {
      employee: false,
      admin: false
    };

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
      $scope.hideEmployeesTab = true;
    };

//GO TO VIEW TAB
    $scope.viewTab = function() {
      document.getElementById('viewTab').className = "is-active";
      document.getElementById('scheduleTab').className = "none";
      document.getElementById('employeesTab').className = "none";
      $scope.hideViewTab = false;
      $scope.hideEditTab = true;
      $scope.hideEmployeesTab = true;
    };

//GO TO EMPLOYEES TAB
    $scope.employeesTab = function() {
      document.getElementById('employeesTab').className = "is-active";
      document.getElementById('viewTab').className = "none";
      document.getElementById('scheduleTab').className = "none";
      $scope.hideEmployeesTab = false;
      $scope.hideViewTab = true;
      $scope.hideEditTab = true;
    };

//LISTEN AND LOAD SCHEDULE ON EMPLOYEE SELECT
    $scope.output = function() {
      var details = [];
      var e = $scope.employeeList;
      for(var i = 0; i<arr.length; i++) {
        if(arr[i].name === e){
          details.push(arr[i]);
        }
      }
      var m = details[0].monday;
      var mDetails = m.split('-');
      if(mDetails[0] === "Off") {
        $scope.monStart = mDetails[0];
        $scope.monEnd = mDetails[0];
        $scope.monStartAMPM = 'am/pm';
        $scope.monEndAMPM = 'am/pm';
        $scope.monday = false;
      }
      else{
        var timeStartMonday = mDetails[0].match(/[a-zA-Z]+|[0-9]+/g);
        var timeEndMonday = mDetails[1].match(/[a-zA-Z]+|[0-9]+/g);
        $scope.monStart = timeStartMonday[0];
        $scope.monStartAMPM = timeStartMonday[1];
        $scope.monEnd = timeEndMonday[0];
        $scope.monEndAMPM = timeEndMonday[1];
        $scope.monday = true;
      }
      var t = details[0].tuesday;
      var tDetails = t.split('-');
      if(tDetails[0] === "Off") {
        $scope.tuesStart = tDetails[0];
        $scope.tuesEnd = tDetails[0];
        $scope.tuesStartAMPM = 'am/pm';
        $scope.tuesEndAMPM = 'am/pm';
        $scope.tuesday = false;
      }
      else{
        var timeStartTuesday = tDetails[0].match(/[a-zA-Z]+|[0-9]+/g);
        var timeEndTuesday = tDetails[1].match(/[a-zA-Z]+|[0-9]+/g);
        $scope.tuesStart = timeStartTuesday[0];
        $scope.tuesStartAMPM = timeStartTuesday[1];
        $scope.tuesEnd = timeEndTuesday[0];
        $scope.tuesEndAMPM = timeEndTuesday[1];
        $scope.tuesday = true;
      }
      var w = details[0].wednesday;
      var wDetails = w.split('-');
      if(wDetails[0] === "Off") {
        $scope.wedStart = wDetails[0];
        $scope.wedEnd = wDetails[0];
        $scope.wedStartAMPM = 'am/pm';
        $scope.wedEndAMPM = 'am/pm';
        $scope.wednesday = false;
      }
      else{
        var timeStartWednesday = wDetails[0].match(/[a-zA-Z]+|[0-9]+/g);
        var timeEndWednesday = wDetails[1].match(/[a-zA-Z]+|[0-9]+/g);
        $scope.wedStart = timeStartWednesday[0];
        $scope.wedStartAMPM = timeStartWednesday[1];
        $scope.wedEnd = timeEndWednesday[0];
        $scope.wedEndAMPM = timeEndWednesday[1];
        $scope.wednesday = true;
      }
      var th = details[0].thursday;
      var thDetails = th.split('-');
      if(thDetails[0] === "Off") {
        $scope.thursStart = thDetails[0];
        $scope.thursEnd = thDetails[0];
        $scope.thursStartAMPM = 'am/pm';
        $scope.thursEndAMPM = 'am/pm';
        $scope.thursday = false;
      }
      else{
        var timeStartThursday = thDetails[0].match(/[a-zA-Z]+|[0-9]+/g);
        var timeEndThursday = thDetails[1].match(/[a-zA-Z]+|[0-9]+/g);
        $scope.thursStart = timeStartThursday[0];
        $scope.thursStartAMPM = timeStartThursday[1];
        $scope.thursEnd = timeEndThursday[0];
        $scope.thursEndAMPM = timeEndThursday[1];
        $scope.thursday = true;
      }
      var f = details[0].friday;
      var fDetails = f.split('-');
      if(fDetails[0] === "Off") {
        $scope.friStart = fDetails[0];
        $scope.friEnd = fDetails[0];
        $scope.friStartAMPM = 'am/pm';
        $scope.friEndAMPM = 'am/pm';
        $scope.friday = false;
      }
      else{
        var timeStartFriday = fDetails[0].match(/[a-zA-Z]+|[0-9]+/g);
        var timeEndFriday = fDetails[1].match(/[a-zA-Z]+|[0-9]+/g);
        $scope.friStart = timeStartFriday[0];
        $scope.friStartAMPM = timeStartFriday[1];
        $scope.friEnd = timeEndFriday[0];
        $scope.friEndAMPM = timeEndFriday[1];
        $scope.friday = true;
      }
      var s = details[0].saturday;
      var sDetails = s.split('-');
      if(sDetails[0] === "Off") {
        $scope.satStart = sDetails[0];
        $scope.satEnd = sDetails[0];
        $scope.satStartAMPM = 'am/pm';
        $scope.satEndAMPM = 'am/pm';
        $scope.saturday = false;
      }
      else{
        var timeStartSaturday = sDetails[0].match(/[a-zA-Z]+|[0-9]+/g);
        var timeEndSaturday = sDetails[1].match(/[a-zA-Z]+|[0-9]+/g);
        $scope.satStart = timeStartSaturday[0];
        $scope.satStartAMPM = timeStartSaturday[1];
        $scope.satEnd = timeEndSaturday[0];
        $scope.satEndAMPM = timeEndSaturday[1];
        $scope.saturday = true;
      }
      var su = details[0].sunday;
      var suDetails = su.split('-');
      if(suDetails[0] === "Off") {
        $scope.sunStart = suDetails[0];
        $scope.sunEnd = suDetails[0];
        $scope.sunStartAMPM = 'am/pm';
        $scope.sunEndAMPM = 'am/pm';
        $scope.sunday = false;
      }
      else{
        var timeStartSunday= suDetails[0].match(/[a-zA-Z]+|[0-9]+/g);
        var timeEndSunday = suDetails[1].match(/[a-zA-Z]+|[0-9]+/g);
        $scope.sunStart = timeStartSunday[0];
        $scope.sunStartAMPM = timeStartSunday[1];
        $scope.sunEnd = timeEndSunday[0];
        $scope.sunEndAMPM = timeEndSunday[1];
        $scope.sunday = true;
      }
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
        $state.reload();
      });
    };

//ADD EMPLOYEE
    $scope.add = function(employee) {
      User.newEmployee(employee).then(function(res){
        $scope.employee.email = "";
        toastr.success('Invite Sent!');
      });    
    };

//DELETE EMPLOYEE
    $scope.delete = function(employee) {
      var details = [];
      var e = $scope.employeeList;
      for(var i = 0; i<arr.length; i++) {
        if(arr[i].name === e){
          details.push(arr[i]);
        }
      }
      User.removeEmployee(details[0].id).then(function(res){
        $scope.employeeList = "Select Employee";
        toastr.success('Employee Deleted');
      });    
    };

//CHANGE EMPLOYEE ROLE
    $scope.setRole = function(option) {
      if(option.employee ===  true) {
        var employeeDetails = [];
        var e = $scope.employeeList;
        for(var i = 0; i<arr.length; i++) {
          if(arr[i].name === e){
            employeeDetails.push(arr[i]);
          }
        }
        User.setEmployeeRole(employeeDetails[0].id).then(function(res){
          toastr.success('Role Changed To "Employee"');
        });
      }
      if(option.admin ===  true) {
        var adminDetails = [];
        var a = $scope.employeeList;
        for(var j = 0; j<arr.length; j++) {
          if(arr[j].name === a){
            adminDetails.push(arr[j]);
          }
        }
        User.getUser().then(function(res){
          var adminKey = res.user.givenRole;
          var employeeId = adminDetails[0].id;
          User.assignRole(employeeId, adminKey).then(function(res){
            toastr.success('Role Changed To "Admin"');
          });
        });
      }
    };


  }
  })();